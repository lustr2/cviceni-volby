import './style.css';

export const Candidate = ({ name, avatar, onVote }) => {

    const handleClick = () => {
 //     console.log('handle onClick in Candidates');
      onVote(name);
  //   console.log(`Vote for ${name}`);
    }

  return (
    <div className="candidate">
      <h3 className="candidate__name">{name}</h3>
      <img className="candidate__avatar" src={avatar} />
      {/*<button className="btn-vote" onClick={() => onVote(name)} >Vybrat</button>
       lze take, kdyz to funguje, jinak pro debugg je lepsi ten nasledujici radek */}
      <button className="btn-vote" onClick={handleClick} >Vybrat</button>
    </div>
  );
};
