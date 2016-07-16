
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
          return current.data;
        }
        previous = current;
        current = current.next;
      }
    }
  }; 

	this.shift = function(){
    if(this.start === null){
      return undefined;
    } else {
      var old = this.start;
      var novo = this.start.next;
      this.start = novo;
      return old.data;
    }
  };
  
	this.unshift = function(data){
    if(this.start === null){
      this.start = LinkedList.makeNode();
      this.start.data = data;
      this.end = this.start;
    } else {
      var novo = LinkedList.makeNode();
      novo.data = data;
      novo.next = this.start;
      this.start = novo;
    }
  };

  this.count = function(){
    var counter = 0;
    var current = this.start;
    while(current !== null){
      counter++;
      current = current.next;
    }
    return counter;
  };

  this.delete = function(data){
    var current = this.start;
    var previous = this.start;
    while(current !== null){
      if(current.data === data){
        previous.next = current.next;
        delete current;
        return;
      }
      previous = current;
      current = current.next;
    }
  };
};


module.exports = LinkedList;
