const person = {
    fullname: function(){
        return this.firstname + " " + this.lastname + ' ' + city;
    }

}
const vivek ={
      firstname: 'vivek',
      lastname: 'sharma'

}

console.log(person.fullname.call(vivek));
