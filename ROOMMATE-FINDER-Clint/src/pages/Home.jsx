import Banner from "../components/Banner";
import FeaturesPost from "./FeaturesPost";
import SafetyTips from "./SafetyTips";
import HowWorks from "./HowWorks";
import { useTheme } from "../hooks/use-theme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="fixed top-[74px] right-4 p-2 rounded-full bg-base-200 hover:bg-base-300 transition-all duration-300 z-50"
    >
      {theme === 'light' ? (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
      )}
    </button>
  );
};

const Home = () => {
  const { theme } = useTheme();
  return (
    <div data-theme={theme} className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      <ThemeToggle />
      <div className={`${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
        <Banner></Banner>
        <FeaturesPost></FeaturesPost>
        <HowWorks></HowWorks>
        <SafetyTips></SafetyTips>
      </div>
    </div>
  );
};

export default Home;
