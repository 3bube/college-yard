import React from "react";
import { FaStar } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const ListingDetailsCard = ({
  imageUrl: propImageUrl,
  title: propTitle,
  listingLocation: propListingLocation,
  price: propPrice,
  distance: propDistance,
  rating: propRating,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { title, price, location: listingLocation, distance, amenities, imageUrl, rating } = location.state || {};

  const handleMapNavigation = () => {
    navigate('/listing-map', { state: { listingLocation } });
  };

  return (
    <section className="relative rounded-lg flex flex-col justify-center min-[375px]:mt-4 mt-10 w-full max-w-2xl" data-v0-t="card">
      <div className="z-10 overflow-hidden w-full aspect-ratio p-2">
        <img className="w-full" src={propImageUrl} alt="" />
        <div className="mt-[-1rem] ml-8 p-0">
          <svg width="23" height="38" viewBox="0 0 23 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.5 38L11.5 28.5L0.500007 38L0.5 0L22.5 -3.8466e-06L22.5 38Z" fill="white" />
          </svg>
        </div>
      </div>
      <div className="bg-[#222] mt-[-14rem] max-[] p-4 flex flex-col justify-start gap-2 w-full z-0 rounded-xl">
        <span className="pt-[13rem] "></span>
        <div className="flex items-center justify-end gap-1 text-[#A3FE35]">
          <FaStar /> {propRating}
        </div>
        <h2 className="min-[375px]:text-2xl max-[375px]:text-xl max-[300px]:text-md font-semibold mb-2 max-[350px]:text-center">{propTitle}</h2>
        <div className="flex max-[360px]:flex-col items-center justify-center gap-1 ">
          <div className="flex flex-col max-[374px]:items-center items-start w-[272px]">
            <p className="text-[12px] mb-2 flex items-center gap-1 ">
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.5 0C7.00783 0 4.75 2.20486 4.75 4.92445C4.75 7.64318 6.80992 10.8896 9.5 15.5455C12.1901 10.8896 14.25 7.64318 14.25 4.92445C14.25 2.20486 11.993 0 9.5 0ZM9.5 6.90909C8.62521 6.90909 7.91667 6.13614 7.91667 5.18182C7.91667 4.2275 8.62521 3.45455 9.5 3.45455C10.3748 3.45455 11.0833 4.2275 11.0833 5.18182C11.0833 6.13614 10.3748 6.90909 9.5 6.90909ZM19 19H0L3.16667 12.0909H5.64854C5.95333 12.6445 6.28029 13.2214 6.62388 13.8182H4.14517L2.56183 17.2727H16.4374L14.854 13.8182H12.3753C12.7197 13.2214 13.0467 12.6445 13.3507 12.0909H15.8333L19 19Z" fill="#A3FE35" />
              </svg>
              {propListingLocation}
            </p>
            <p className="text-[12px] mb-4 flex items-center gap-1 whitespace-nowrap">
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.9212 11.6725L16.2277 8.14975L15.8305 7.7945L12.6166 10.5061C12.026 10.3854 11.3899 10.5656 10.9594 11.0469C10.3154 11.767 10.3775 12.8739 11.0985 13.5179C11.8195 14.1619 12.9255 14.0997 13.5695 13.3787C14 12.8975 14.1076 12.2456 13.9212 11.6725ZM10.5 2.35725V0H14V2.35725C12.7409 2.14462 11.732 2.149 10.5 2.35725ZM18.2446 4.16325L19.4757 2.93213L20.713 4.16937L19.5571 5.32525C19.1529 4.90175 18.7136 4.51412 18.2446 4.16325ZM1.75 7.875H8.75V9.625H1.75V7.875ZM0 11.375H7V13.125H0V11.375ZM2.625 14.875H8.75V16.625H2.625V14.875ZM21 12.25C21 17.0826 17.0826 21 12.25 21C9.80875 21 7.6125 19.9894 6.02787 18.375H8.89787C9.89363 18.9271 11.032 19.25 12.25 19.25C16.1096 19.25 19.25 16.1096 19.25 12.25C19.25 8.39038 16.1096 5.25 12.25 5.25C11.032 5.25 9.89363 5.57288 8.89787 6.125H6.02787C7.6125 4.51062 9.80875 3.5 12.25 3.5C17.0826 3.5 21 7.41738 21 12.25Z" fill="#A3FE35" />
              </svg>
              <b>{propDistance}</b> from Baze University
            </p>
            <p className="text-[12px] mb-4 flex items-center gap-1 whitespace-nowrap">
              <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.33333 3V12H17.5V3H3.33333ZM10.4167 10.5C8.85196 10.5 7.58333 9.15675 7.58333 7.5C7.58333 5.84325 8.85196 4.5 10.4167 4.5C11.9814 4.5 13.25 5.84325 13.25 7.5C13.25 9.15675 11.9814 10.5 10.4167 10.5ZM10.5583 8.98425V9.3H10.275V9C9.98175 8.99475 9.67788 8.92125 9.425 8.78175L9.55462 8.289C9.82521 8.4 10.1857 8.51775 10.4684 8.451C10.7942 8.373 10.8615 8.01825 10.501 7.8465C10.2367 7.7175 9.42996 7.60575 9.42996 6.8745C9.42996 6.46575 9.72392 6.099 10.275 6.01875V5.7H10.5583V6.00525C10.763 6.0105 10.994 6.04875 11.2511 6.13125L11.1477 6.62475C10.9302 6.5445 10.6894 6.47025 10.4556 6.486C10.0342 6.51225 9.99662 6.89925 10.2913 7.06125C10.7765 7.302 11.409 7.482 11.409 8.12475C11.409 8.64 11.028 8.91525 10.5583 8.98425ZM15.375 1.5H1.91667V9.75H0.5V0H15.375V1.5Z" fill="#A3FE35" />
              </svg>
              <b>{propPrice} PER YEAR (₦550K/SEMESTER)</b>
            </p>
          </div>
          <button onClick={handleMapNavigation} type="button" className="bg-white max-[350px]:p-3 p-4 rounded-full ">
            <svg width="38" height="40" viewBox="0 0 38 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.5852 22.63C10.0072 22.63 9.43693 22.5231 8.89147 22.3141L9.52216 20.524C9.86462 20.6552 10.221 20.7216 10.5852 20.7216C10.9881 20.7216 11.3817 20.6406 11.7536 20.4818L12.4463 22.2477C11.8543 22.502 11.2283 22.63 10.5852 22.63ZM24.0203 21.3615L21.4495 19.8306L22.3529 18.1717L24.9252 19.7026L24.0203 21.3615ZM14.0176 21.3291L13.0801 19.6913L15.6199 18.102L16.5574 19.7399L14.0176 21.3291ZM20.0889 19.0481C19.7124 18.8845 19.3141 18.8002 18.905 18.8002C18.5486 18.8002 18.1968 18.865 17.8606 18.993L17.2392 17.198C17.7754 16.9955 18.3363 16.8934 18.905 16.8918C19.5558 16.8918 20.1912 17.0247 20.7909 17.2871L20.0889 19.0481ZM6.55467 18.784C5.72563 18.784 5.05311 19.4855 5.05311 20.3522C5.05311 21.219 5.72563 21.9204 6.55467 21.9204C7.38371 21.9204 8.05624 21.2173 8.05624 20.3522C8.05469 19.4855 7.38371 18.784 6.55467 18.784ZM27.5921 7.38543L18.9995 0.905273L10.407 7.38543L0.404297 0.905273V33.3061L10.407 39.7862L18.9995 33.3061L27.5921 39.7862L37.5948 33.3061V0.905273L27.5921 7.38543ZM34.4956 31.503L28.2972 35.519V28.4459H26.7476V35.1545L20.5491 30.4807V23.5858H17.4499V30.4791L11.2515 35.1529V26.8259H9.70192V35.5174L3.5035 31.5013V6.72446L9.70192 10.7405V15.4856H11.2515V10.7438L17.4499 6.06834V12.2456H20.5491V6.06834L26.7476 10.7438V13.8656H28.2972V10.7405L34.4956 6.72446V31.503ZM32.4377 23.6117L30.4294 21.5478L32.4021 19.4531L31.3049 18.3158L29.3338 20.4138L27.3287 18.3531L26.2393 19.4904L28.2476 21.5575L26.2749 23.6571L27.3643 24.796L29.3431 22.6932L31.3499 24.7587L32.4377 23.6117Z" fill="#111111" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ListingDetailsCard;
