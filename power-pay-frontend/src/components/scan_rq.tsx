import {  useEffect, useRef as ref } from 'react';
import { Scanner as S } from '@yudiel/react-qr-scanner'; // Importing Scanner from @yudiel/react-qr-scanner
const Scanner: any = S;


const QRScannerComponent  = () => {
  
  const qrScannerRef = ref<any>(null);
  useEffect(() => {
    if (qrScannerRef.current) {
      qrScannerRef.current.start();
    }

    return () => {
      if (qrScannerRef.current) {
        qrScannerRef.current.stop();
      }
    };
  }, []);

  const handleScan = (data: string | null) => {
    if (data) {
      console.log('Scanned data:', data);
    }
  };

  const handleError = (err: any) => {
    console.error('QR scanner error:', err);
  };

  return (
    <div>
      <Scanner
        ref={qrScannerRef}
        on={handleScan}
        onError={handleError}
        facingMode="environment"
        style={{ width: '100%', height: 'auto' }}
      />
      <button onClick={() => qrScannerRef.current?.start()} className="bg-blue-950 rounded-full w-80 m-auto px-4  text-white text-lg absolute  p-2.5 inset-x-0 bottom-12">Start Scan</button>
    </div>
  );
};

export default QRScannerComponent;