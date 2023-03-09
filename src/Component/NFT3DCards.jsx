import React, { useState } from "react";
import Style from "../styles/NftCard.module.css";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { GoVerified } from "react-icons/go";
import { BsImages } from "react-icons/bs";
import Modal from "../Utils/Modal";
import Nft3dData from "../Data/NFT3DData";

const Nft3DCard = () => {
  const [like, setLike] = useState(true);
  const [modalPopUp, setModalPopUp] = useState(false);
  const [modalData, setModalData] = useState([]);

  const getData = (imgScr, Chain, title, desc, page, Created) => {
    const modalData = [imgScr, Chain, title, desc, page, Created];
    setModalData((item) => [1, ...modalData]);
    setModalPopUp(true);
  };

  const likenfts = () => {
    if (!like) {
      setLike(true);
    } else {
      setLike(false);
    }
  };

  return (
    <>
      <header>Trending in 3D Games</header>
      <div className="NFTCard">
        <div className={Style.NFTCard}>
          {Nft3dData.cardData.map((data, i) => (
            <div
            className=""
              onClick={() =>
                getData(
                  data.imgScr,
                  data.title,
                  data.desc,
                  data.Chain,
                  data.page,
                  data.Created
                )
              }
            >
              <div className={Style.NFTCard_box} key={i}>
                <div className={Style.NFTCard_box_img}>
                  <div key={i}>
                    <img
                      className={Style.NFTCard_box_img_image}
                      src={data.imgScr}
                      alt=""
                      width={250}
                      height={250}
                    />
                  </div>
                  <div className={Style.NFTCard_box_update}>
                    <div className={Style.NFTCard_box_update_left}>
                      <div
                        className={Style.NFTCard_box_update_like}
                        onClick={() => likenfts()}
                      >
                        <AiFillHeart
                          className={Style.NFTCard_box_update_like_icon}
                        />
                        {""}22
                      </div>
                    </div>
                    <div className={Style.NFTCard_box_update_right}>
                      <div className={Style.NFTCard_box_update_right_info}>
                        <small> Days left </small>
                        <p>{data.Stock}</p>
                      </div>
                    </div>
                  </div>
                  <div className={Style.NFTCard_box_update_details}>
                    <div className={Style.NFTCard_box_update_details_Price}>
                      <div
                        className={Style.NFTCard_box_update_details_Price_box}
                      >
                        <h4>
                          {data.By}{" "}
                          <i>
                            <GoVerified />
                          </i>
                        </h4>
                        <div
                          className={
                            Style.NFTCard_box_update_details_Price_box_box
                          }
                        >
                          <div
                            className={
                              Style.NFTCard_box_update_details_Price_box_bid
                            }
                          >
                            <small>Current Bid</small>
                            <p>{data.Bib}</p>
                          </div>
                          <div
                            className={Style.NFTCard_box_update_details_stock}
                          >
                            <button
                              onClick={() =>
                                getData(
                                  data.imgScr,
                                  data.title,
                                  data.desc,
                                  data.Chain,
                                  data.page,
                                  data.Created
                                )
                              }
                            >
                              click here
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={Style.NFTCard_box_update_details_category}>
                      <BsImages />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modalPopUp === true ? (
        <Modal
          img={modalData[1]}
          title={modalData[2]}
          desc={modalData[3]}
          chain={modalData[4]}
          page={modalData[5]}
          Created={modalData[6]}
          hide={() => setModalPopUp(false)}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default Nft3DCard;
