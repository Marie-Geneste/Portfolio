import './styles.scss';

function Card() {
  return (
    <div id="card">
      <p>J'ai fait ci et ça</p>
    </div>
  );
}

export default Card;

// import './styles.scss';
// import {
//   string, object,
// } from 'prop-types';

// function Repo({ name, owner, description }) {
//   return (
//     <div className="repo">
//       <img src={owner.avatar_url} alt="" />
//       <div className="text">
//         <p className="name">{name}</p>
//         <p className="login">{owner.login}</p>
//         <p className="description">{description}</p>
//       </div>
//     </div>
//   );
// }

// export default Repo;

// Repo.propTypes = {
//   // eslint-disable-next-line react/require-default-props
//   description: string,
//   name: string.isRequired,
//   owner: object.isRequired,
// };
