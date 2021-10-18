import styles from "../styles/Home.module.css";
import Image from "next/image";
const about = () => {
  return (
    <div className={styles.container}>
      <div className={styles.projectHero}>
        <h2>About Me</h2>
      </div>
      <div className={styles.project}>
        <div className={styles.box}>
          <Image src="/Images/randeeprana.jpg" alt="randeep-rana" width={400} height={400} />
        </div>
        <div className={styles.box}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, hic blanditiis. Quos,
            similique impedit! Laboriosam deserunt ab perferendis ad aut minus impedit, ratione modi
            tempora asperiores laborum numquam beatae similique sit laudantium, minima animi
            accusamus aliquid fugiat eligendi aspernatur. Odio repudiandae, facere delectus est
            officia similique error repellendus ratione aspernatur mollitia fugiat consequatur
            veniam necessitatibus reprehenderit dolore in iste libero natus, neque corrupti qui?
            Eos, nostrum ipsum alias quisquam unde distinctio tempore odit corrupti molestiae dolore
            suscipit tempora accusantium reiciendis assumenda officiis optio sapiente, atque iusto
            fuga consequuntur! Consectetur molestiae tempore mollitia consequatur doloribus!
            Veritatis illum dolorum a optio vel voluptatem consectetur, nulla quos, voluptatibus
            similique doloribus nostrum unde porro dolorem autem quaerat, neque nesciunt architecto
            non! Facilis eaque cupiditate numquam impedit a doloremque porro, consequatur possimus
            dolores accusantium illum sequi labore eius expedita vero ex ab eos deserunt quae.
          </p>
        </div>
      </div>
    </div>
  );
};

export default about;
