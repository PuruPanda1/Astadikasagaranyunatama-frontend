import Spline from '@splinetool/react-spline';

export default function EarthView() {
  return (
    <div className="w-full h-full">
      <Spline
         scene="https://prod.spline.design/YE5f7gW6MBDx40L2/scene.splinecode" 
        className="w-full h-full"
      />
    </div>
  );
}