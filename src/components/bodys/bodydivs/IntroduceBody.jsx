import PhoneIcon from '@mui/icons-material/Phone';
import topbody from '../../../assets/profiles/topbody.png'
import { useNavigate } from "react-router-dom";
import Footer from '../../navbars/Footer';

const IntroduceBody = () => {
    const Navigate = useNavigate();
    return (
        <>
            <div className='flex px-16 gap-10'>
                <div className='w-1/2'>
                    <div className='flex flex-col gap-4'>
                        <div>
                            <h1>Khoa Tran is a</h1>
                            <h1 className='text-rose-500'>Full Stack Developer</h1>
                        </div>
                        <p>Experienced React JS Developer and adept MERN stack developer skilled in building robust web and mobile applications using MongoDB, Express, React.js, Next.js, and Node.js. Proficient in creating professional mobile solutions with a strong focus on user experience. Passionate about delivering user-centric experiences through technology and dedicated to crafting high-quality applications.</p>
                        <div onClick={() => Navigate('/contacts')} className='w-fit flex items-center gap-2 cursor-pointer border-[1px] border-rose-500 rounded-lg p-2 hover:bg-rose-500 hover:text-white transition-all duration-300'>
                            <PhoneIcon />
                            <span>CONTACT ME !!</span>
                        </div>
                    </div>
                </div>
                <div className='w-1/2 flex flex-col items-center'>
                    <div className='flex justify-center items-center'>
                        <img className='object-cover' src={topbody} alt="Khoa Tran" />
                    </div>
                    <div className='w-fit mt-2'>
                        <div className='flex gap-2 p-2 items-center border-[1px] border-rose-500'>
                            <div className='w-[20px] h-[20px] bg-rose-500'></div>
                            <div className='flex gap-1 text-lg font-semibold'>
                                <span>Software Engineer at</span>
                                <span className='text-rose-500'>Freelancer Software</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center mt-10'>
                <div className='w-2/3 text-center border-[1px] border-rose-500 rounded-3xl p-4'>
                    <h1 className='text-black font-mono'>Experience is the name everyone gives to their mistakes</h1>
                    <p className='text-xl'>- Oscar Wilde</p>
                </div>
            </div>
        </>
    )
}

export default IntroduceBody
