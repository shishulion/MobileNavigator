import Link from "next/link";
import Image from 'next/image';

export default function Home() {
  return (
<div>
<Image
    
    src="./public/main_background_1080x1920.jpg"
        alt="Descriptive text for screen readers"
        width={500}
        height={300}
        layout="responsive"/>

    </div>  
);
}
