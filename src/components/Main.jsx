import React, { useState } from "react";

const Main = () => {
  const [imgModal, setImgModal] = useState([]);
  const flowersArray = [
    "/img/piretrum1.jpg",
    "/img/piretrum2.jpg",
    "/img/piretrum3.jpg",
    "/img/piretrum4.jpg",
    "/img/piretrum5.jpg",
    "/img/piretrum6.jpg",
    "/img/piretrum7.jpg",
  ];

  const imageHandler = (img, index) => {
    setImgModal([img, index]);
    document.body.style.overflow = 'hidden';
  };

  const closeHandler = () => {
    setImgModal([]);
    document.body.style.overflow = 'auto';
    
  }

  return (
    <>
      {imgModal.length > 0 && <div className="modalBlock-wrapper">
        <div className="modalBlock">
        <img className="modalBlock-img" src={imgModal[0]}/>
        <span className="modalBlock-number">{imgModal[1] + 1 + '/' + flowersArray.length}</span>  
        <span onClick={closeHandler} className="modalBlock-close">&times;</span>
        </div>  
      </div>}
      <div className="container">
        <div className="main">
          <div className="main-left">
            <div className="main-left__block4">Реклама...</div>
            <img src='/img/img1.jpg' className="main-left__block7"></img>
          </div>
          <div className="main-content">
            <div className="content-header">
              <div className="content-header__block5">
              Гербера – травянистый многолетник с красивыми крупными цветами. Большинство людей видят ее срезанной, в букетной композиции, однако вырастить герберу самостоятельно не так уж и сложно. Растение довольно нетребовательно. Оно отлично украсит клумбу или будет радовать в горшке как комнатный цветок. Относится гербера к семейству Астровые. Её родиной являются просторы тропической Азии, Южной Африки и о. Мадагаскар. Иногда её можно встретить под названием трансваальская маргаритка или же трансваальская ромашка.
              </div>
            </div>
            <div className="content-photos">
              {flowersArray.map((img, index) => {
                return (
                  <img
                    onClick={() => imageHandler(img, index)}
                    className="content-photos__block6"
                    src={img}
                  />
                );
              })}
            </div>
            <div className="content-footer">
              <div className="content-footer__block8">
              Период цветения герберы приходится на август-ноябрь. Из центра листовой розетки вырастает голый, покрытый ворсом цветонос длиной до 60-80 см. Он может быть одним или же вырастет сразу несколько. На верхушке распускается единственная корзинка диаметром до 14-15 см (в редких случаях до 30 см).
              </div>
              <div className="content-footer__block9">Окраска лепестков бывает очень разнообразной: розовой, белой, желтой, лиловой, бордовой. Пышный центр состоит из множества мелких трубчатых цветов желтого или темно-коричневого цвета. По краям в несколько рядов растут язычковые цветы. Цветет нежный кустик в течение 3-4 месяцев.</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
