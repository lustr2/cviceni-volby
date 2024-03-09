import { Candidate } from "../Candidate";

export const CandidateList = ({candidates, handleOnVote}) => {

    const handleOnVoteCandisdateInCandidateList = (name) => {
//        console.log('Handle in CandidateList');
        handleOnVote(name);
    }
    return (
      <>
        <h2>Kandidáti</h2>
        <div className="candidate-list">
            {candidates.map((c) => (
            <Candidate 
                key={c.name}
                name={c.name} 
                avatar={c.avatar} 
                onVote={handleOnVote}
        
    /*           onVote={handleVote}
                onVote={setPresident}
            onVote={(value) => setPresident(value)}  nebo tento delsi zapis */
            />
            ))}
        </div>
      </>
    )
}