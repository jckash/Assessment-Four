const dreams = [
    {
      dreamId: 1,
      dream: "I went to class in my underwear",
      
    },
    {
      dreamId: 2,
      dream: "All of my teeth fell out of my mouth",
      
    },
    {
      dreamId: 3,
      dream: "Gollum chased me through a graveyard in the rain",
    },
    {
      dreamId: 4,
      dream: "There was a snake in my boot",
    
    },
    {
      dreamId: 5,
      dream: "Obama and I were best friends",
    
    },
  ];
  
  let dreamId = 6;
  

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

getFortune: (req, res) => {
        const fortunes = ["Being the best version of yourself is the best gift you can give to the world.", "If you have them, smoke them.", "It is always 5 o'clock somewhere.", "Get your mind set - confidence will lead you on.", "You'll ride an elephant in the next 5 years."];
      

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
},

    addDream: (req, res) => {
      const { dream } = req.body;
      const newObj = {
        songId,
        dream,
      };
      dreams.push(newObj);
      res.status(200).send(dreams);
      songId++;
    },

    updateDream: (req, res) => {
        const { id } = req.params;
        const { newDream } = req.query;
        const indexOfDream = dreams.findIndex((dream) => dream.dreamIdId === +id);
        if (indexOfDream === -1) {
          res.status(400).send("dream not found");
          return;
        }
    
        dream[indexOfDream].dream = newDream;
        res.status(200).send(db);
},
deleteDream: (req, res) => {
    const { id } = req.params;
    const indexOfDream = dreams.findIndex((dream) => dream.dreamId === +id);
    if (indexOfDream === -1) {
      res.status(400).send("Dream not found");
      return;
    }
    dream.splice(indexOfDream,1);
    res.status(200).send(dream);
}
};