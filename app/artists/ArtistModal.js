import { CloseIcon, FbIcon, InstIcon, SpotifyIcon } from "../../components/UI/icons";

export default function ArtistModal({ show, artist, closeClick }) {
  return (
    <div
      onClick={(e) => {
        const isBackdrop = e.target.classList.contains("fixed");
        isBackdrop && closeClick();
      }}
      className={`fixed w-screen h-svh z-40 top-0 left-0 bg-black/60 flex justify-center items-center p-5 lg:p-10  overflow-hidden transition-all ${
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}>
      <div className="bg-white w-[clamp(340px,50vw,680px)] h-full  flex flex-col rounded-10 p-5 lg:p-8 xl:py-10 xl:px-8 overflow-hidden ">
        <div className="flex items-center justify-between gap-4 pb-5">
          <p className="text-black font-matiz text-xl lg:text-3xl uppercase">{artist?.name}</p>{" "}
          <button
            onClick={closeClick}
            className="w-8 h-8 flex justify-center items-center rounded-md bg-primary flex-shrink-0 group">
            <CloseIcon className="group-hover:rotate-180 transition-all text-black" />
          </button>
        </div>

        <div className="w-full flex flex-col h-1/2 overflow-y-auto flex-grow text-black gap-2 text-sm">
          {artist?.moreInfo}
        </div>
      </div>
    </div>
  );
}
const SocialBtn = ({ type = "", href }) => (
  <a
    target="_blank"
    href={href}
    className="bg-pink rounded-10 p-3 text-white flex gap-2 items-center group hover:text-pink hover:bg-white transition-all border-pink border-2">
    {type === "spotify" && (
      <>
        <SpotifyIcon className="group-hover:scale-105 transition-all group-hover:rotate-2" />
        Spotify
      </>
    )}
    {type === "instagram" && (
      <>
        <InstIcon className="group-hover:scale-105 transition-all group-hover:rotate-2" /> Instagram
      </>
    )}
    {type === "facebook" && (
      <>
        <FbIcon className="group-hover:scale-105 transition-all group-hover:rotate-2 " /> Facebook
      </>
    )}
  </a>
);
