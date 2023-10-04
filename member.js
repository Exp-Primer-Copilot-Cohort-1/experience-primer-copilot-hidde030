function skillsMember(){
    this.skills = [];
    this.add = function(skill){
        this.skills.push(skill);
    }
    this.remove = function(skill){
        this.skills = this.skills.filter(function(item){
            return item !== skill;
        })
    }
    this.get = function(){
        return this.skills.join(", ");
    } 
    
}