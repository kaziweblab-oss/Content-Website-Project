//import Style Here
import style from "./SubscribeSection.module.css";

//import icon here
import { RiMailSendLine } from "react-icons/ri";

function SubscriptionSection() {
  return (
    <>
      <section className={style.subscribeSection}>
        <div className={style.subscribeSectionContainer}>
          <div className={style.subscribeSectionHeader}>
            <div className={style.subscribeSectionHeaderIcon}>
              <RiMailSendLine className={style.sendMailIcon} />
            </div>
            <div>
              <p>Subscribe to our Newsletter</p>
              <p>Stay tuned! Recive News and Discounts</p>
            </div>
          </div>
          <div className={style.subscribeSectionForm}>
            <input type="email" placeholder="your@gmail.com" />
            <button>Subscribe</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default SubscriptionSection;
