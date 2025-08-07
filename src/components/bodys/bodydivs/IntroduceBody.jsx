import PhoneIcon from '@mui/icons-material/Phone';
import topbody from '../../../assets/profiles/topbody.png';
import { useNavigate } from 'react-router-dom';
import Footer from '../../navbars/Footer';

const IntroduceBody = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="flex flex-col md:flex-row px-4 sm:px-8 md:px-16 gap-6 md:gap-10">
                <div className="w-full md:w-1/2">
                    <div className="flex flex-col gap-4">
                        <div>
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Khoa Tran is a</h1>
                            <h1 className="text-rose-500 text-2xl sm:text-3xl md:text-4xl font-bold">Full Stack Developer</h1>
                        </div>
                        <p className="text-sm sm:text-base md:text-lg">
                            Experienced React JS Developer and adept MERN stack developer skilled in building robust web and mobile applications using MongoDB, Express, React.js, Next.js, and Node.js. Proficient in creating professional mobile solutions with a strong focus on user experience. Passionate about delivering user-centric experiences through technology and dedicated to crafting high-quality applications.
                        </p>
                        <div
                            onClick={() => navigate('/contacts')}
                            className="w-fit flex items-center gap-2 cursor-pointer border-[1px] border-rose-500 rounded-lg p-3 sm:p-4 hover:bg-rose-500 hover:text-white transition-all duration-300"
                        >
                            <PhoneIcon className="text-lg sm:text-xl" />
                            <span className="text-sm sm:text-base">CONTACT ME !!</span>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col items-center">
                    <div className="flex justify-center items-center w-full">
                        <img className="object-cover w-full max-w-xs sm:max-w-sm md:max-w-md" src={topbody} alt="Khoa Tran" />
                    </div>
                    <div className="w-fit mt-4">
                        <div className="flex gap-2 p-3 items-center border-[1px] border-rose-500">
                            <div className="w-5 h-5 bg-rose-500"></div>
                            <div className="flex gap-1 text-base sm:text-lg font-semibold">
                                <span>Software Engineer at</span>
                                <span className="text-rose-500">Freelancer Software</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center mt-6 sm:mt-10 px-4">
                <div className="w-full sm:w-2/3 text-center border-[1px] border-rose-500 rounded-3xl p-4 sm:p-6">
                    <h1 className="text-black font-mono text-base sm:text-lg md:text-xl">
                        Experience is the name everyone gives to their mistakes
                    </h1>
                    <p className="text-sm sm:text-base md:text-xl">- Oscar Wilde</p>
                </div>
            </div>
        </>
    );
};

export default IntroduceBody;