export const getStatus = (req, res) => {
    res.status(200).send("Hello World");
};

//you can use asyn if you want to.
//export asyn function getStatus1(req, res){
export function getStatus1(req, res){
    res.status(201).send("your world is created sucussfully");
}