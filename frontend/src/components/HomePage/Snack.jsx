import namkeensNachos from "../../assets/namkeensNachos.png";
import sweets from "../../assets/sweets.png";

import biscuitslogo from "../../assets/biscuits.png";

const Snack = () => {
  return (
    <>
      <h1 className="snack">Snack Store</h1>
      <hr className="hrbank" />
      <div className="Fruit">
        <div>
          <img src={namkeensNachos} alt="" />
        </div>
        {/* <div> <img src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/307d4a8d-5ffb-43c3-a70e-59d26c671cc2/hp_frozen-snacks-snacksStorefront_m_480_251022_02.jpg" alt="" /></div>
              <div> <img src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/307d4a8d-5ffb-43c3-a70e-59d26c671cc2/hp_soups-noodles-snacksStorefront_m_480_251022_03.jpg" alt="" /></div>
                <div> <img src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/307d4a8d-5ffb-43c3-a70e-59d26c671cc2/hp_ready-cook-snacksStorefront_m_480_251022_04.jpg" alt="" /></div> */}

        <div>
          {" "}
          <img src={biscuitslogo} />
        </div>

        <div>
          {" "}
          <img src={sweets} alt="" />
        </div>
      </div>
    </>
  );
};

export default Snack;
