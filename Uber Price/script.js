
class Uber {
        constructor(km){
    
    this.km=km;
    }
    uber_km() {
        
        return "For " +  this.km +" "+ "Kilometer";
    
        }
    uber_total() {
        
       return  "Uber Price " +" " + 16 * this.km;

    } 
    }
    
    const Uber_rate = new Uber(150);
    console.log(Uber_rate.uber_km());
    console.log(Uber_rate.uber_total());
    
    
    