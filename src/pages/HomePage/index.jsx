import { useState, useEffect } from 'react';
import { Castle } from '../../components/Castle';
import { CandidateList } from '../../components/CandidateList';
import './style.css';

export const HomePage = () => {
  const [candidates, setCandidates] = useState([]);
  const [president, setPresident] = useState(null);

  useEffect(() => setCandidates([
    { name: "Ferda Mravenec", avatar: '/avatars/candidate01.png' },
    { name: "Marta Smetana", avatar: '/avatars/candidate02.png' },
    { name: "Beáta Skočdopolová", avatar: '/avatars/candidate03.png' },
    { name: "Lumír Poňuchálek", avatar: '/avatars/candidate04.png' },
  ]), []);
  

  const handleVote = (name) => {
 //   console.log("handle on vote in Homepage");
  //  if (confirm(`Are you sure?`)) {
      setPresident(name);
//    }
    
  }

  return (
    <div className="container">
      <Castle president={president} />      
      <CandidateList candidates={candidates} handleOnVote={handleVote} />
      
    </div>
  );
};
