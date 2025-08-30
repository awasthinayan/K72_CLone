import { useRef } from "react"
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/all"

const Agence = () => {

  gsap.registerPlugin(ScrollTrigger)
  const imageArray = [
     'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',
  ]

  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

 useGSAP(() => {
  gsap.to(imageDivRef.current, {
    scrollTrigger: {
      trigger: imageDivRef.current,
      start: "top 36%",
      end: "top -100%",
      scrub: true,
      pin: true,
      pinSpacing:true,
      pinReparent:true,
      pinType:'transform',
      anticipatePin:1,
      invalidateOnRefresh:1,
      onUpdate: (elem) => {
          let imageIndex;
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length)
          } else {
            imageIndex = imageArray.length - 1
          }
          imageRef.current.src = imageArray[imageIndex]
        }
    }
  });
});

  
  return (
   <div className='parent bg-black'>
      <div id='page1' className='py-1'>
        <div ref={imageDivRef} className='pb-10 absolute overflow-hidden h-[20vw] w-[15vw] rounded-3xl top-96 opacity-85 left-[30vw] 
        bottom-80'>
          <img ref={imageRef} className='h-full object-cover w-full' src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt="Images here" />
        </div>
        <div className='relative font-[font2]'>
          <div className='lg:mt-[52vh]'>
            <h1 className='text-[20vw] text-center uppercase leading-[18vw]'>Soixan7e <br />
              Douze</h1>
          </div>
          <div className='pl-[40%] mt-20'>
            <p className='lg:text-6xl text-xl leading-tight'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
          </div>
        </div>
      </div>
      <div id='page2' className=" h-screen">
      </div>
    </div>
  )
}

export default Agence