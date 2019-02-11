const voters = [];
const democrat_candidates = [];
const republican_candidates = [];
const independent_candidates = [];

class Person {
  constructor(name) {
    this.name = name;
  }
}

class Voter extends Person {
  constructor(name, ideology) {
    super(name);
    this.ideology = ideology;
  }
  newVoter(name, ideology) {
    this.name = name
    this.ideology = ideology
    let voter = ({
      name,
      ideology
    })
    voters.push(voter)
  }

}

class Candidate extends Person {
  constructor(name, party, votes=1) {
    super(name);
    this.party = party;
    this.votes = 0
  }
  newCandidate(name, party, votes=1) {
    this.name = name
    this.party = party
    this.votes = 1
    let candidate = ({
      name,
      party,
      votes
    })
    if (this.party === 'Democrat') {
      democrat_candidates.push(candidate)
    } else if (this.party === 'Republican') {
      republican_candidates.push(candidate)
    } else if (this.party === 'Independent') {
      independent_candidates.push(candidate)
    } else {
      console.log('candidate party = null')
    }
  }
}



let person1 = new Voter()
let person2 = new Candidate()


const vote = () => {
  for (i = 0; i < voters.length; i++) {

    if (voters[i].ideology === 'Neutral') {
      democrat_candidates[0] ? democrat_candidates[0].votes += .25 : null
      republican_candidates[0] ? republican_candidates[0].votes += .25 : null
      independent_candidates[0] ? independent_candidates[0].votes += .50 : null
    } else if (voters[i].ideology === 'Liberal') {
      democrat_candidates[0] ? democrat_candidates[0].votes += .60 : null
      republican_candidates[0] ? republican_candidates[0].votes += .20 : null
      independent_candidates[0] ? independent_candidates[0].votes += .20 : null
    } else if (voters[i].ideology === 'Conservative') {
      democrat_candidates[0] ? democrat_candidates[0].votes += .20 : null
      republican_candidates[0] ? republican_candidates[0].votes += .60 : null
      independent_candidates[0] ? independent_candidates[0].votes += .20 : null
    } else {
      
    }
  }
}



let winnerDemocrat;
let winnerRepublican;
let winnerIndependent;
let winnerElections;
function topVoterDemocrat(party) {
    return party.votes === winnerDemocrat;
}
function topVoterRepublican(party) {
    return party.votes === winnerRepublican;
}
function topVoterIndependent(party) {
    return party.votes === winnerIndependent;
}

const resultDemocrat = () => {
  winnerDemocrat = democrat_candidates.map(a => a.votes)

  return winnerDemocrat = Math.max(...winnerDemocrat)
}

const resultRepublican = () => {
  winnerRepublican = republican_candidates.map(a => a.votes)
  return winnerRepublican = Math.max(...winnerRepublican)
}

const resultIndependent = () => {
  winnerIndependent = independent_candidates.map(a => a.votes)
  return winnerIndependent = Math.max(...winnerIndependent)
}


const winner = () => {

if(winnerDemocrat > winnerRepublican && winnerDemocrat > winnerIndependent){
  winnerElections = democrat_candidates.find(topVoterDemocrat)
alert(`The winner is: ${winnerElections.name}`)
} else if(winnerRepublican > winnerDemocrat && winnerRepublican > winnerIndependent) {
  winnerElections = republican_candidates.find(topVoterRepublican)
  alert(`The winner is: ${winnerElections.name}`)
} else {
  winnerElections = independent_candidates.find(topVoterIndependent)
  alert(`The winner is: ${winnerElections.name}`)
}
}



$('#voter-form .btn-primary').click(function() {
  event.preventDefault()
  let voterName = document.getElementById("voter-name").value;
  let voterIdeology = document.getElementById("voter-ideology").value
  let liNode = document.createElement("li");
  liNode.className = "list-group-item";
  let txtNode = document.createTextNode(voterName);
  document.querySelector("#voter-list ul.list-group").appendChild(liNode);
  liNode.appendChild(txtNode);
  // console.log(republican_candidates)
  // console.log(independent_candidates)
  // console.log(democrat_candidates)
  // console.log(voters)
  // alert(`added ${voterName} : ${voterIdeology}.`)

  person1.newVoter(voterName, voterIdeology)
})

$('#candidate-form .btn-primary').click(function() {
  event.preventDefault()

  let candidateName = document.getElementById("candidate-name").value;
  let candidateParty = document.getElementById("candidate-party").value
  let liNode = document.createElement("li");
  liNode.className = "list-group-item";
  let txtNode = document.createTextNode(candidateName);
  document.querySelector("#candidate-list ul.list-group").appendChild(liNode);
  liNode.appendChild(txtNode);
  person2.newCandidate(candidateName, candidateParty)
  // console.log(republican_candidates)
  // console.log(independent_candidates)
  // console.log(democrat_candidates)
  // console.log(voters)
  // alert(`added ${candidateName} : ${candidateParty}.`)



})

$('.btn-danger').click(function() {
  event.preventDefault()

  vote();
  resultDemocrat();
  resultRepublican();
  resultIndependent();
  winner();

})
