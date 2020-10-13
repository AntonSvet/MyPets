import React from "react";
import s from "./Cats.module.css"
import {NavLink} from "react-router-dom";

const NavItem = (props) => {
    return <div><NavLink to={"/dogs/ + props.id"}>{props.name}</NavLink></div>
}
let articleData = [
    {id:1 , name:"Собаки"},
    {id:2, name: 'Первая статья'},
    {id:3, name: 'Вторая статья'},
    {id:4, name: 'Третья статья'},
    {id:5, name: 'Четвертая стотья'}
]
const articleElement = articleData.map(article => <NavItem name ={article.name} id={article.id}/>)
const Dogs = (props) => {
    return(
        <div>
            {articleElement}
            DOGS ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad, adipisci assumenda consectetur cupiditate esse facilis, fugit in iste nemo, nobis nostrum quisquam tempore tenetur ullam? Aspernatur assumenda delectus doloribus eos nemo nobis quidem temporibus vero. Aliquid atque dolores non? Animi doloribus ex hic numquam omnis optio porro tenetur vero. A corporis cumque et hic in magni minima natus, nostrum numquam praesentium, tempora vitae. Commodi debitis enim eveniet ex excepturi facere facilis in ipsam, iste iure maxime molestias porro praesentium quibusdam repellendus sequi vel velit! Accusamus accusantium ad adipisci asperiores autem consectetur consequuntur, cum dolore esse excepturi expedita facere iste laborum libero natus necessitatibus nemo nihil numquam obcaecati, omnis optio provident quasi quo repellendus rerum sed tempore. Ab aliquid distinctio et excepturi fuga harum ipsum iure magnam, minima nihil numquam provident quis recusandae rerum sit soluta unde? Alias at blanditiis corporis cumque eos ex excepturi fugiat harum id modi molestiae nihil nisi odio omnis, porro quaerat quidem. Dolorem dolores harum laborum maxime numquam officia perferendis porro soluta veritatis voluptates. Adipisci asperiores atque blanditiis delectus dicta dolorem dolores dolorum labore modi molestias mollitia numquam perferendis quibusdam repudiandae sit tempore, tenetur. Ad adipisci alias aliquam debitis deserunt dolor eaque eius eos esse, expedita explicabo facere fuga fugit id magni maxime minima, minus nesciunt non nulla odio provident quasi quidem quod sint totam ut vero. Ad asperiores assumenda at blanditiis consequuntur, cupiditate dignissimos doloribus ducimus eius, eos ex fugiat fugit illo illum ipsa ipsum itaque iure iusto magnam molestias necessitatibus nesciunt nostrum nulla numquam pariatur perferendis quos reiciendis repellendus repudiandae sed tenetur totam voluptate voluptates. Animi atque distinctio facere itaque, maiores nemo, nesciunt odit pariatur provident quo sapiente tempora tempore temporibus vitae voluptatum. Blanditiis, consequuntur eveniet explicabo fugiat placeat repellendus similique totam ut. Adipisci atque, corporis cupiditate est eum explicabo provident quo quod reiciendis rerum tempora tempore ullam voluptate! Animi blanditiis deleniti eius explicabo harum incidunt iste, maxime, numquam officia quidem quis quisquam repudiandae sint, voluptas voluptatibus. Facilis, nobis possimus. Aliquid autem debitis dolorem ducimus eos, explicabo, hic itaque laudantium nam officia, pariatur placeat rem soluta unde vero? Alias et labore praesentium quae sapiente? A ab, ad, amet assumenda commodi cum eos facere fuga fugit libero magnam molestias odio odit officia pariatur, quas quos repudiandae soluta sunt voluptas! Ab amet at blanditiis dicta dolorem doloremque earum enim ex expedita inventore libero magni minima nulla quasi quia recusandae, ullam unde ut veritatis voluptatibus. Alias nulla, placeat. Ad aliquam aperiam cum, eaque hic nihil placeat repellendus voluptas. A accusamus alias aspernatur corporis cum cupiditate dicta distinctio doloribus eaque eligendi error esse exercitationem expedita illum in, incidunt iste itaque iusto laudantium maiores minus natus nemo numquam officiis pariatur possimus provident quidem quisquam rerum sapiente soluta voluptate voluptatibus voluptatum? Aperiam iusto quam quos repellat saepe sint tempore? Ab, alias dolor dolorem, eligendi iure laboriosam minima optio, perspiciatis provident quia quod sequi voluptates? Ad adipisci aliquid consectetur deleniti distinctio dolores impedit ipsam ipsum, iusto maxime mollitia rerum tempore, vitae? At expedita illum ipsa nobis voluptates! Cumque dicta fugiat magni officia voluptas voluptate! Deserunt, iusto laborum minima nihil officia quibusdam sit tenetur velit vitae voluptates! Alias aut, culpa dignissimos ea mollitia omnis perferendis possimus quasi temporibus vel? Doloremque iusto modi tenetur. A ab accusamus animi dicta dolorum eaque excepturi illo in laboriosam laborum nesciunt nulla optio perspiciatis recusandae saepe similique sunt, unde voluptatibus? Dignissimos earum id illum ipsam laborum odit veniam vitae? Consequatur consequuntur corporis officiis, quis quod ratione sequi. Accusamus blanditiis consectetur consequatur cumque, esse et excepturi, inventore laudantium molestiae mollitia nam nemo nulla officia pariatur placeat quaerat quidem repellendus repudiandae sint unde veniam voluptate voluptatem. Accusantium aliquid, atque corporis deleniti distinctio dolor impedit ipsum modi, neque quia reprehenderit sequi tempore vel. Alias animi assumenda at, autem blanditiis cumque dolorem doloribus earum exercitationem impedit nisi nobis, nulla odit officiis reiciendis similique vel. Accusamus accusantium animi architecto aut autem beatae cupiditate dolore dolorem ea eaque esse in ipsum magnam nostrum numquam, pariatur perferendis quas qui quisquam ratione repellat reprehenderit sit tempora voluptate voluptates. Aliquam at cum ea earum, explicabo impedit in iure libero minus nam nesciunt possimus quas quisquam quod rem similique velit! Autem dicta libero optio provident, quisquam vitae. Doloremque ducimus esse et eum harum hic, laboriosam, magnam, natus nobis nostrum odio soluta? Aspernatur deserunt dolor dolorem doloremque minima numquam odio placeat provident rerum veniam? Aliquam asperiores aspernatur, aut laborum sapiente suscipit? Beatae, ipsa itaque quasi sequi tempora unde vitae. A, accusantium consequatur debitis excepturi libero magni, molestiae quibusdam saepe tempore temporibus totam, voluptas voluptates. Ad blanditiis cupiditate debitis dolorum eius error sequi. Ab autem, beatae blanditiis corporis culpa delectus fugit ipsam laborum necessitatibus nesciunt obcaecati odio optio pariatur perspiciatis sint unde velit. Deleniti dolor earum iusto molestias, obcaecati pariatur. Aliquid cumque fugit ipsum itaque laudantium molestiae numquam reprehenderit voluptatem. Accusamus aspernatur assumenda commodi, illo ipsum laboriosam necessitatibus repellat ullam! Alias deserunt dolores illum magni sint temporibus voluptatibus? Ab accusamus adipisci blanditiis cum cumque distinctio dolorem dolorum ducimus ea eligendi est ex hic incidunt laboriosam nesciunt quam, quisquam repellendus saepe, tenetur, veniam! A eos exercitationem minima numquam quasi quod recusandae sit tenetur velit. Autem cupiditate eligendi error excepturi illum inventore iure molestias nulla temporibus voluptatum? A esse, rem? Aliquid at aut autem beatae cumque cupiditate debitis dicta dolorem dolores earum error ex expedita explicabo facilis incidunt laborum magnam maxime nam nesciunt, porro rem reprehenderit, velit voluptas? Asperiores consectetur, dicta explicabo facilis fugit id incidunt modi nesciunt optio quos tempore ut. Aliquid commodi consequatur culpa debitis dolore dolorem ducimus eum expedita facilis fugiat harum inventore itaque laborum minima modi necessitatibus neque obcaecati pariatur perferendis praesentium, quae quasi quia quidem quod recusandae reiciendis rem rerum sapiente sequi sunt tempora veniam veritatis voluptas. Ab deserunt eligendi explicabo fugit in laborum laudantium neque quaerat recusandae sequi. Debitis eius ex ipsam nulla omnis? Aperiam, ea soluta. Ab accusantium aliquam amet consectetur culpa, debitis dignissimos distinctio dolorem doloremque dolorum eum harum id impedit labore laboriosam laborum natus nesciunt, nostrum placeat praesentium, quisquam quo quos ratione repellendus reprehenderit repudiandae saepe tempore tenetur velit veritatis. Saepe.
        </div>
    )
}
export default Dogs