import './Preview.css';
import { useRef, useEffect } from 'react';

interface PreviewProps {
  code: string;
  bundlingError: string;
}

const html = `
    <html>
      <head>
        <style>
          html { background-color: white; } 
        </style>
      </head>
      <body>    
        <div id="root"></div>
        <script>
          const handleError = (err) => {
            const root = document.querySelector('#root');
            root.innerHTML = '<div style="color: red;"><h4>Runtime Error</h4>' + err + '</div>';
            console.error(err);
          };

          window.addEventListener('error', (event) => {
            event.preventDefault();
            handleError(event.error);
          });


          window.addEventListener('message', (event) => {
            try {
               eval(event.data);
            } catch (err) {
              handleError(err);
            }
          }, false);
        </script>
      </body>
    </html>
  `;

const Preview: React.FC<PreviewProps> = ({ code, bundlingError }) => {
  const iframe = useRef<any>();

  useEffect(() => {
    iframe.current.srcdoc = html;

    // gives the iframe enough time the initialize and listen to postMessages
    setTimeout(() => {
      iframe.current.contentWindow.postMessage(code, '*');
    }, 50);
  }, [code, bundlingError]);

  return (
    <div className='preview-wrapper'>
      <iframe
        title='preview'
        ref={iframe}
        sandbox='allow-scripts'
        srcDoc={html}
      />
      {bundlingError && <div className='preview-error'>{bundlingError}</div>}
    </div>
  );
};

export default Preview;
