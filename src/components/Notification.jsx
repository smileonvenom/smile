import { useState } from 'react';
import { dexscreener, notification1, smileVariante1, smileVariante2, smileVariante3 } from "../assets";
import { notificationImages } from "../constants";
import Copy from "../assets/svg/Copy";

const Notification = ({ className, title }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("0:c0f8763c2e241c7cc5723ba8bfcb46d2e0446e743eb43dc854e81eeaf9ee6f3c")
      .then(() => setCopied(true))
      .catch((error) => console.error('', error));
  };

  return (
    <div
      className={`${className || ""
        } flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5`}
    >
      <img
        src={smileVariante1}
        width={62}
        height={62}
        alt="image"
        className="rounded-xl"
      />

      <div className="flex-1">
        <h6 className="mb-1 font-semibold text-base">{title}</h6>

        <div className="flex items-center justify-between">
          {/* <ul className="flex -m-0.5">
            {notificationImages.map((item, index) => (
              <li
                key={index}
                className="flex w-6 h-6 border-2 border-n-12 rounded-full overflow-hidden"
              >
                <img
                  src={item}
                  className="w-full"
                  width={20}
                  height={20}
                  alt={item}
                />
              </li>
            ))}
          </ul> */}
          <div className="body-2 text-n-13">Token Contract</div>
          <button onClick={handleCopy}>
            <Copy />
          </button>
          {copied}
        </div>
      </div>
    </div>
  );
};

export default Notification;
