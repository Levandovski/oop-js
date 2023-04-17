

let pessoa = {
    name: "",
    age: "",
    birthday: "",
    getName: function(){
        console.log(this.name);
    },
    setName: function(newName){
        this.name = newName;
    },
    getAge: function(){
        console.log(this.age);
    },
    setAge: function(newAge){
        this.age = newAge;
    },
    getBirthday: function(){
        console.log(this.birthday);
    },
    setBirthday: function(newBirthday){
        this.birthday = newBirthday;
    },
    getAllInfos: function(){
        console.log("----------Infos----------")
        this.getName();
        this.getAge();
        this.getBirthday();
        console.log("----------End-Info-------");       
    }
}

pessoa.setName("João da Silva");
pessoa.setAge("25");
pessoa.setBirthday("1997");
pessoa.getAllInfos();

pessoa.setName("Marcos da Silva");
pessoa.setAge("30");
pessoa.setBirthday("1980");
pessoa.getAllInfos();