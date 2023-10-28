Array.prototype.except = function(keys){
    return this.filter((x, index, arr) => {
        return (typeof keys === 'number') ? (index !== keys) :
        keys.indexOf(index) === -1;
    });
};



function getMinimalCVS(data){
    data = [data]
    func_list = {
        head: function head(){
            last = data.length - 1
            return data[last]
        },
        history: function history(){
            return data
        },
        push: function push(elem){
            last = this.head()
            new_ver = [...last, elem]
            data = [...data, new_ver]
        },
        pop: function pop(){
            last = this.head()
            last_elem_i =  last.length - 1
            last_elem = last[last_elem_i]
            new_ver = last.except([last_elem_i])
            data = [...data, new_ver]
            return last_elem
        }
    }

    return func_list
}



const cvs = getMinimalCVS(['a', 'b', 'c']);

console.log(cvs.head());    
console.log(cvs.pop());   

cvs.push('d');
cvs.push('e');

console.log(cvs.head());    
console.log(cvs.history());

console.log(JSON.stringify(cvs.history())) // если не показывает содержимое Array