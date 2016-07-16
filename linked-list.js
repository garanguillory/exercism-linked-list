
var LinkedList = function(){

	LinkedList.makeNode = function(){
		return {data: null, next: null};
	};

  this.start = null;
  this.end = null;

	this.push = function(data){
    if(this.start === null){
      this.start = LinkedList.makeNode();
      this.start.data = data;
      this.end = this.start;
    } else {
      var current = this.start;
      while(current !== null){
        if(current === this.end){
          current.next = LinkedList.makeNode();
          current.next.data = data;
          this.end = current.next;
          console.log("this.end: ", this.end);
          return;
        }
        current = current.next;
      }
    }
  };

	this.pop = function(){
    if(this.start === null){
      return undefined;
    } else {
      var current = this.start;
      var previous = this.start;
      while(current !== null){
        if(current === this.end){
          this.end = previous;
          // console.log("this.end: ", this.end);
          // console.log("this.start: ", this.start);
          return current.data;
        }
        previous = current;
        current = current.next;
      }
    }
  }; 

	this.shift = function(){};
	this.unshift = function(){};



};


module.exports = LinkedList;


// this.end.next = LinkedList.makeNode();
// this.end.next.data = data;
// this.end.next.next = null;
// this.end = this.end.next;
