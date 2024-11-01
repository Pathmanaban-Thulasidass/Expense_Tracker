let three_BarClicked = 0;
document.getElementById("profile").addEventListener("click",()=>{
    document.getElementById("asideProfile").style.color = "#fff457bd"
    document.getElementById("asideProfileIcon").style.color = "#fff457bd"
    NormalOfRecord()
    NormalOfRecords()
    NormalOfChart()
    disappearAsideBar()
    three_BarClicked--;
})

document.getElementById("records").addEventListener("click",()=>{
    NormalOfProfile()
    document.getElementById("asideRecordsIcon").style.color = "#fff457bd";
    document.getElementById("asideRecords").style.color = "#fff457bd"; 
    NormalOfRecords()
    document.getElementById("asideChartsIcon").style.color = NormalOfChart()
    disappearAsideBar()

    document.getElementById("infoTable").style.display = "flex"
    document.getElementById("recordInfo").style.display = "flex"
    document.getElementById("mainMonthlyBudget").style.display = "none"
    document.getElementById("hrLineOfMonthlyBudget").style.display = "none"
    document.getElementById("monthlyBudgetDetailIndividual").style.display = "none"
    document.getElementById("MonthlyBugetAddButton").style.display = "none"
    document.getElementById("monthlyBudgetIconspage").style.display = "none"
    document.getElementById("monthlycalculator").style.display = "none"
    document.getElementById("mainProfile").style.display = "none"
    document.getElementById("addPage").style.display = "none"



    three_BarClicked--;
})

document.getElementById("reports").addEventListener("click",()=>{
    NormalOfProfile()
    NormalOfRecord()
    document.getElementById("asideReportsIcon").style.color = "#fff457bd";
    document.getElementById("asideReports").style.color = "#fff457bd";
    NormalOfChart()
    disappearAsideBar()

    document.getElementById("infoTable").style.display = "flex"
    document.getElementById("recordInfo").style.display = "none"
    document.getElementById("mainMonthlyBudget").style.display = "flex"
    document.getElementById("greaterArrowToBudgetInfo").style.display = "flex"
    document.getElementById("hrLineOfMonthlyBudget").style.display = "none"
    document.getElementById("monthlyBudgetDetailIndividual").style.display = "none"
    document.getElementById("MonthlyBugetAddButton").style.display = "none"
    document.getElementById("monthlyBudgetIconspage").style.display = "none"
    document.getElementById("monthlycalculator").style.display = "none"
    document.getElementById("mainProfile").style.display = "none"
    document.getElementById("addPage").style.display = "none"

    three_BarClicked--;
})

document.getElementById("chart").addEventListener("click",()=>{
    NormalOfProfile()
    NormalOfRecord()
    NormalOfRecords()
    document.getElementById("asideChartsIcon").style.color = "#fff457bd";
    document.getElementById("asideCharts").style.color = "#fff457bd";
    disappearAsideBar()
    three_BarClicked--;
})

function NormalOfProfile(){
    document.getElementById("asideProfile").style.color = "whitesmoke"
    document.getElementById("asideProfileIcon").style.color = "whitesmoke"
}

function NormalOfRecords(){
    document.getElementById("asideReportsIcon").style.color = "whitesmoke";
    document.getElementById("asideReports").style.color = "whitesmoke";
}

function NormalOfRecord(){
    document.getElementById("asideRecordsIcon").style.color = "whitesmoke";
    document.getElementById("asideRecords").style.color = "whitesmoke";
}

function NormalOfChart(){
    document.getElementById("asideChartsIcon").style.color = "whitesmoke";
    document.getElementById("asideCharts").style.color = "whitesmoke";
}

function asideAppearFun(){

        document.getElementById("asideBar").style.width = "15vw"
        document.getElementById("asideProfile").style.display = "block";
        document.getElementById("asideRecords").style.display = "block";
        document.getElementById("asideReports").style.display = "block";
        document.getElementById("asideCharts").style.display = "block";
    
}
function disappearAsideBar(){
    document.getElementById("asideBar").style.width = "auto"
    document.getElementById("asideProfile").style.display = "none";
    document.getElementById("asideRecords").style.display = "none";
    document.getElementById("asideReports").style.display = "none";
    document.getElementById("asideCharts").style.display = "none";
}
document.getElementById("three_Bar").addEventListener("click",()=>{
    if(three_BarClicked%2 == 0){
        asideAppearFun()
    }
    else{
        disappearAsideBar();
    }
    three_BarClicked++;
})

document.getElementById("greaterArrowToBudgetInfo").addEventListener("click",()=>{
    document.getElementById("infoTable").style.display = "none";
    document.getElementById("greaterArrowToBudgetInfo").style.display = "none"
    document.getElementById("MonthlyBugetAddButton").style.display = "flex";
    document.getElementById("hrLineOfMonthlyBudget").style.display = "block"
    if(noOfMonthlyBudgetsCreated == 0){
        document.getElementById("monthlyBudgetDetailIndividual").style.display = "none"
    }
    else{
        document.getElementById("monthlyBudgetDetailIndividual").style.display = "block"
    }
        
})

document.getElementById("MonthlyBugetAddButton").addEventListener("click",()=>{
    document.getElementById("MonthlyBugetAddButton").style.display = "none";
    document.getElementById("monthlyBudgetDetailIndividual").style.display = "none" 
})

document.getElementById("reports").addEventListener("click",()=>{
    document.getElementById("recordInfo").style.display = "none";
    document.getElementById("monthlyBudget").style.display = "flex";
})

document.getElementById("MonthlyBugetAddButton").addEventListener("click",()=>{
    document.getElementById("monthlyBudgetIconspage").style.display = "grid";
})

// Function for the icon clickable color....

function NormalOfEducation(value){
    if(value == 1){
        document.getElementById("Education").style.color = "whitesmoke";
    }
    else{
        document.getElementById("AddEducation").style.color = "whitesmoke";
    }
}
function NormalOfTransport(value){
    if(value == 1){
        document.getElementById("Transport").style.color = "whitesmoke";
    }
    else{
        document.getElementById("AddTransport").style.color = "whitesmoke";
    }
    
}
function NormalOfTea(value){
    if(value == 1){
        document.getElementById("Tea").style.color = "whitesmoke";
    }
    else{
        document.getElementById("AddTea").style.color = "whitesmoke";
    }
}
function NormalOfShopping(value){
    if(value == 1){
        document.getElementById("Shopping").style.color = "whitesmoke";
    }
    else{
        document.getElementById("AddShopping").style.color = "whitesmoke";
    }
}
function NormalOfFood(value){
    if(value == 1){
        document.getElementById("Food").style.color = "whitesmoke";
    }
    else{
        document.getElementById("AddFood").style.color = "whitesmoke";
    }
}
function NormalOfTelephone(value){
    if(value == 1){
        document.getElementById("Telephone").style.color = "whitesmoke";
    }
    else{
        document.getElementById("AddTelephone").style.color = "whitesmoke";
    }
}
function NormalOfEntertainment(value){
    if(value == 1){
        document.getElementById("Entertainment").style.color = "whitesmoke";
    }
    else{
        document.getElementById("AddEntertainment").style.color = "whitesmoke";
    }
}
function NormalOfSport(value){
    if(value == 1){
        document.getElementById("Sport").style.color = "whitesmoke";
    }
    else{ 
        document.getElementById("AddSport").style.color = "whitesmoke";
    }
}
function NormalOfSocial(value){
    if(value == 1){
        document.getElementById("Social").style.color = "whitesmoke";
    }
    else{
        document.getElementById("AddSocial").style.color = "whitesmoke";
    }
}
function NormalOfClothing(value){
    if(value == 1){
        document.getElementById("Clothing").style.color = "whitesmoke";
    }
    else{
        document.getElementById("AddClothing").style.color = "whitesmoke";
    }
}
function NormalOfCar(value){
    if(value == 1){
        document.getElementById("Car").style.color = "whitesmoke";
    }
    else{
        document.getElementById("AddCar").style.color = "whitesmoke";
    }
}
function NormalOfLiquor(value){
    if(value == 1){
        document.getElementById("Liquor").style.color = "whitesmoke";
    }
    else{
        document.getElementById("AddLiquor").style.color = "whitesmoke";
    }
}
function NormalOfElectronics(value){
    if(value == 1){
        document.getElementById("Electronics").style.color = "whitesmoke";
    }
    else{
        document.getElementById("AddElectronics").style.color = "whitesmoke";
    }
}
function NormalOfTravel(value){
    if(value == 1){
        document.getElementById("Travel").style.color = "whitesmoke";
    }
    else{
        document.getElementById("AddTravel").style.color = "whitesmoke";
    }

}
function NormalOfHealth(value){
    if(value == 1){
        document.getElementById("Health").style.color = "whitesmoke";
    }
    else{
        document.getElementById("AddHealth").style.color = "whitesmoke";
    }
}
function NormalOfPet(value){
    if(value == 1){
        document.getElementById("Pet").style.color = "whitesmoke";
    }
    else{
        document.getElementById("AddPet").style.color = "whitesmoke";
    }
}
function NormalOfRepair(value){
    if(value == 1){
        document.getElementById("Repair").style.color = "whitesmoke";
    }
    else{
        document.getElementById("AddRepair").style.color = "whitesmoke";
    }
}
function NormalOfHousing(value){
    if(value == 1){
        document.getElementById("Housing").style.color = "whitesmoke";
    }
    else{
        document.getElementById("AddHousing").style.color = "whitesmoke";
    }
}
function NormalOfGift(value){
    if(value == 1){
        document.getElementById("Gift").style.color = "whitesmoke";
    }
    else{
        document.getElementById("AddGift").style.color = "whitesmoke";
    }
}
function NormalOfDonate(value){
    if(value == 1){
        document.getElementById("Donate").style.color = "whitesmoke";
    }
    else{
        document.getElementById("AddDonate").style.color = "whitesmoke";
    }
}
function NormalOfSnacks(value){
    if(value == 1){
        document.getElementById("Snacks").style.color = "whitesmoke";
    }
    else{
        document.getElementById("AddSnacks").style.color = "whitesmoke";
    }

}
function NormalOfVegetables(value){
    if(value == 1){
        document.getElementById("Vegetables").style.color = "whitesmoke";
    }
    else{
        document.getElementById("AddVegetables").style.color = "whitesmoke";
    }
}
function NormalOfFruits(value){
    if(value == 1){
        document.getElementById("Fruits").style.color = "whitesmoke";
    }
    else{
        document.getElementById("AddFruits").style.color = "whitesmoke";
    }
}
function NormalOfMore(value){
    if(value == 1){
        document.getElementById("More").style.color = "whitesmoke";
    }
    else{
        document.getElementById("AddMore").style.color = "whitesmoke";
    }

}

let IconSelected = 0;

let IconSelectedArr = ["","Education","Transport","Tea","Shopping","Food","Telephone","Entertainment","Sport","Social","Clothing","Car","Liquor","Electronics","Travel","Health","Pet","Repair","Housing","Gift","Donate","Snacks","Vegetables","Fruits","More","Salary","Invesment","Part-time","Award"];

let IconArr = ['','<i class="fa-solid fa-graduation-cap"></i>','<i class="fa-solid fa-bus"></i>','<i class="fa-solid fa-mug-hot"></i>','<i class="fa-solid fa-cart-shopping"></i>','<i class="fa-solid fa-utensils"></i>','<i class="fa-solid fa-phone-volume"></i>','<i class="fa-solid fa-tape"></i>','<i class="fa-solid fa-baseball-bat-ball"></i>','<i class="fa-solid fa-users"></i>','<i class="fa-solid fa-shirt"></i>','<i class="fa-solid fa-car"></i>','<i class="fa-solid fa-martini-glass"></i>','<i class="fa-solid fa-plug"></i>','<i class="fa-solid fa-motorcycle"></i>','<i class="fa-solid fa-kit-medical"></i>','<i class="fa-solid fa-paw"></i>','<i class="fa-solid fa-hammer"></i>','<i class="fa-solid fa-house"></i>','<i class="fa-solid fa-gift"></i>','<i class="fa-solid fa-hand-holding-dollar"></i>','<i class="fa-solid fa-cookie-bite"></i>','<i class="fa-solid fa-carrot"></i>','<i class="fa-brands fa-apple"></i>','<i class="fa-solid fa-gear"></i>',

'<i class="fa-solid fa-wallet"></i>','<i class="fa-solid fa-sack-dollar"></i>','<i class="fa-regular fa-clock"></i>','<i class="fa-solid fa-gifts"></i>','<i class="fa-solid fa-ellipsis"></i>']

let totalIncome = 0;
let totalExpense = 0;

document.getElementById("Education").addEventListener("click",()=>{
    document.getElementById("Education").style.color = "#fff457bd";
    NormalOfTransport(1)
    NormalOfTea(1)
    NormalOfShopping(1)
    NormalOfFood(1)
    NormalOfTelephone(1)
    NormalOfEntertainment(1)
    NormalOfSport(1)
    NormalOfSocial(1)
    NormalOfClothing(1)
    NormalOfCar(1)
    NormalOfLiquor(1)
    NormalOfElectronics(1)
    NormalOfTravel(1)
    NormalOfHealth(1)
    NormalOfPet(1)
    NormalOfRepair(1)
    NormalOfHousing(1)
    NormalOfGift(1)
    NormalOfDonate(1)
    NormalOfSnacks(1)
    NormalOfFruits(1)
    NormalOfVegetables(1)
    NormalOfMore(1)
    IconSelected = 1; 
    document.getElementById("monthlyBudgetIconspage").classList.add("monthlyBudgetIconspageChanged")

    document.getElementById("monthlycalculator").style.display = "block"
})

document.getElementById("Transport").addEventListener("click",()=>{
    document.getElementById("Transport").style.color = "#fff457bd";
    NormalOfEducation(1)
    NormalOfTea(1)
    NormalOfShopping(1)
    NormalOfFood(1)
    NormalOfTelephone(1)
    NormalOfEntertainment(1)
    NormalOfSport(1)
    NormalOfSocial(1)
    NormalOfClothing(1)
    NormalOfCar(1)
    NormalOfLiquor(1)
    NormalOfElectronics(1)
    NormalOfTravel(1)
    NormalOfHealth(1)
    NormalOfPet(1)
    NormalOfRepair(1)
    NormalOfHousing(1)
    NormalOfGift(1)
    NormalOfDonate(1)
    NormalOfSnacks(1)
    NormalOfFruits(1)
    NormalOfVegetables(1)
    NormalOfMore(1)
    IconSelected = 2; 
    document.getElementById("monthlyBudgetIconspage").classList.add("monthlyBudgetIconspageChanged")

    document.getElementById("monthlycalculator").style.display = "block"
})

document.getElementById("Tea").addEventListener("click",()=>{
    document.getElementById("Tea").style.color = "#fff457bd";
    NormalOfEducation(1)
    NormalOfTransport(1)
    NormalOfShopping(1)
    NormalOfFood(1)
    NormalOfTelephone(1)
    NormalOfEntertainment(1)
    NormalOfSport(1)
    NormalOfSocial(1)
    NormalOfClothing(1)
    NormalOfCar(1)
    NormalOfLiquor(1)
    NormalOfElectronics(1)
    NormalOfTravel(1)
    NormalOfHealth(1)
    NormalOfPet(1)
    NormalOfRepair(1)
    NormalOfHousing(1)
    NormalOfGift(1)
    NormalOfDonate(1)
    NormalOfSnacks(1)
    NormalOfFruits(1)
    NormalOfVegetables(1)
    NormalOfMore(1)
    IconSelected = 3; 
    document.getElementById("monthlyBudgetIconspage").classList.add("monthlyBudgetIconspageChanged")

    document.getElementById("monthlycalculator").style.display = "block"
})

document.getElementById("Shopping").addEventListener("click",()=>{
    document.getElementById("Shopping").style.color = "#fff457bd";
    NormalOfEducation(1)
    NormalOfTransport(1)
    NormalOfTea(1)
    NormalOfFood(1)
    NormalOfTelephone(1)
    NormalOfEntertainment(1)
    NormalOfSport(1)
    NormalOfSocial(1)
    NormalOfClothing(1)
    NormalOfCar(1)
    NormalOfLiquor(1)
    NormalOfElectronics(1)
    NormalOfTravel(1)
    NormalOfHealth(1)
    NormalOfPet(1)
    NormalOfRepair(1)
    NormalOfHousing(1)
    NormalOfGift(1)
    NormalOfDonate(1)
    NormalOfSnacks(1)
    NormalOfFruits(1)
    NormalOfVegetables(1)
    NormalOfMore(1)
    IconSelected = 4; 
    document.getElementById("monthlyBudgetIconspage").classList.add("monthlyBudgetIconspageChanged")

    document.getElementById("monthlycalculator").style.display = "block"
})

document.getElementById("Food").addEventListener("click",()=>{
    document.getElementById("Food").style.color = "#fff457bd";
    NormalOfEducation(1)
    NormalOfTransport(1)
    NormalOfTea(1)
    NormalOfShopping(1)
    NormalOfTelephone(1)
    NormalOfEntertainment(1)
    NormalOfSport(1)
    NormalOfSocial(1)
    NormalOfClothing(1)
    NormalOfCar(1)
    NormalOfLiquor(1)
    NormalOfElectronics(1)
    NormalOfTravel(1)
    NormalOfHealth(1)
    NormalOfPet(1)
    NormalOfRepair(1)
    NormalOfHousing(1)
    NormalOfGift(1)
    NormalOfDonate(1)
    NormalOfSnacks(1)
    NormalOfFruits(1)
    NormalOfVegetables(1)
    NormalOfMore(1)
    IconSelected = 5; 
    document.getElementById("monthlyBudgetIconspage").classList.add("monthlyBudgetIconspageChanged")

    document.getElementById("monthlycalculator").style.display = "block"
})

document.getElementById("Telephone").addEventListener("click",()=>{
    document.getElementById("Telephone").style.color = "#fff457bd";
    NormalOfEducation(1)
    NormalOfTransport(1)
    NormalOfTea(1)
    NormalOfShopping(1)
    NormalOfFood(1)
    NormalOfEntertainment(1)
    NormalOfSport(1)
    NormalOfSocial(1)
    NormalOfClothing(1)
    NormalOfCar(1)
    NormalOfLiquor(1)
    NormalOfElectronics(1)
    NormalOfTravel(1)
    NormalOfHealth(1)
    NormalOfPet(1)
    NormalOfRepair(1)
    NormalOfHousing(1)
    NormalOfGift(1)
    NormalOfDonate(1)
    NormalOfSnacks(1)
    NormalOfFruits(1)
    NormalOfVegetables(1)
    NormalOfMore(1)
    IconSelected = 6;
    document.getElementById("monthlyBudgetIconspage").classList.add("monthlyBudgetIconspageChanged")

    document.getElementById("monthlycalculator").style.display = "block"
})

document.getElementById("Entertainment").addEventListener("click",()=>{
    document.getElementById("Entertainment").style.color = "#fff457bd";
    NormalOfEducation(1)
    NormalOfTransport(1)
    NormalOfTea(1)
    NormalOfShopping(1)
    NormalOfFood(1)
    NormalOfTelephone(1)
    NormalOfSport(1)
    NormalOfSocial(1)
    NormalOfClothing(1)
    NormalOfCar(1)
    NormalOfLiquor(1)
    NormalOfElectronics(1)
    NormalOfTravel(1)
    NormalOfHealth(1)
    NormalOfPet(1)
    NormalOfRepair(1)
    NormalOfHousing(1)
    NormalOfGift(1)
    NormalOfDonate(1)
    NormalOfSnacks(1)
    NormalOfFruits(1)
    NormalOfVegetables(1)
    NormalOfMore(1)
    IconSelected = 7; 
    document.getElementById("monthlyBudgetIconspage").classList.add("monthlyBudgetIconspageChanged")

    document.getElementById("monthlycalculator").style.display = "block"
})

document.getElementById("Sport").addEventListener("click",()=>{
    document.getElementById("Sport").style.color = "#fff457bd";
    NormalOfEducation(1)
    NormalOfTransport(1)
    NormalOfTea(1)
    NormalOfShopping(1)
    NormalOfFood(1)
    NormalOfTelephone(1)
    NormalOfEntertainment(1)
    NormalOfSocial(1)
    NormalOfClothing(1)
    NormalOfCar(1)
    NormalOfLiquor(1)
    NormalOfElectronics(1)
    NormalOfTravel(1)
    NormalOfHealth(1)
    NormalOfPet(1)
    NormalOfRepair(1)
    NormalOfHousing(1)
    NormalOfGift(1)
    NormalOfDonate(1)
    NormalOfSnacks(1)
    NormalOfFruits(1)
    NormalOfVegetables(1)
    NormalOfMore(1)
    IconSelected = 8; 
    document.getElementById("monthlyBudgetIconspage").classList.add("monthlyBudgetIconspageChanged")

    document.getElementById("monthlycalculator").style.display = "block"
})

document.getElementById("Social").addEventListener("click",()=>{
    document.getElementById("Social").style.color = "#fff457bd";
    NormalOfEducation(1)
    NormalOfTransport(1)
    NormalOfTea(1)
    NormalOfShopping(1)
    NormalOfFood(1)
    NormalOfTelephone(1)
    NormalOfEntertainment(1)
    NormalOfSport(1)
    NormalOfClothing(1)
    NormalOfCar(1)
    NormalOfLiquor(1)
    NormalOfElectronics(1)
    NormalOfTravel(1)
    NormalOfHealth(1)
    NormalOfPet(1)
    NormalOfRepair(1)
    NormalOfHousing(1)
    NormalOfGift(1)
    NormalOfDonate(1)
    NormalOfSnacks(1)
    NormalOfFruits(1)
    NormalOfVegetables(1)
    NormalOfMore(1)
    IconSelected = 9; 
    document.getElementById("monthlyBudgetIconspage").classList.add("monthlyBudgetIconspageChanged")

    document.getElementById("monthlycalculator").style.display = "block"
})

document.getElementById("Clothing").addEventListener("click",()=>{
    document.getElementById("Clothing").style.color = "#fff457bd";
    NormalOfEducation(1)
    NormalOfTransport(1)
    NormalOfTea(1)
    NormalOfShopping(1)
    NormalOfFood(1)
    NormalOfTelephone(1)
    NormalOfEntertainment(1)
    NormalOfSport(1)
    NormalOfSocial(1)
    NormalOfCar(1)
    NormalOfLiquor(1)
    NormalOfElectronics(1)
    NormalOfTravel(1)
    NormalOfHealth(1)
    NormalOfPet(1)
    NormalOfRepair(1)
    NormalOfHousing(1)
    NormalOfGift(1)
    NormalOfDonate(1)
    NormalOfSnacks(1)
    NormalOfFruits(1)
    NormalOfVegetables(1)
    NormalOfMore(1)
    IconSelected = 10; 
    document.getElementById("monthlyBudgetIconspage").classList.add("monthlyBudgetIconspageChanged")

    document.getElementById("monthlycalculator").style.display = "block"
})

document.getElementById("Car").addEventListener("click",()=>{
    document.getElementById("Car").style.color = "#fff457bd";
    NormalOfEducation(1)
    NormalOfTransport(1)
    NormalOfTea(1)
    NormalOfShopping(1)
    NormalOfFood(1)
    NormalOfTelephone(1)
    NormalOfEntertainment(1)
    NormalOfSport(1)
    NormalOfSocial(1)
    NormalOfClothing(1)
    NormalOfLiquor(1)
    NormalOfElectronics(1)
    NormalOfTravel(1)
    NormalOfHealth(1)
    NormalOfPet(1)
    NormalOfRepair(1)
    NormalOfHousing(1)
    NormalOfGift(1)
    NormalOfDonate(1)
    NormalOfSnacks(1)
    NormalOfFruits(1)
    NormalOfVegetables(1)
    NormalOfMore(1)
    IconSelected = 11; 
    document.getElementById("monthlyBudgetIconspage").classList.add("monthlyBudgetIconspageChanged")

    document.getElementById("monthlycalculator").style.display = "block"
})

document.getElementById("Liquor").addEventListener("click",()=>{
    document.getElementById("Liquor").style.color = "#fff457bd";
    NormalOfEducation(1)
    NormalOfTransport(1)
    NormalOfTea(1)
    NormalOfShopping(1)
    NormalOfFood(1)
    NormalOfTelephone(1)
    NormalOfEntertainment(1)
    NormalOfSport(1)
    NormalOfSocial(1)
    NormalOfClothing(1)
    NormalOfCar(1)
    NormalOfElectronics(1)
    NormalOfTravel(1)
    NormalOfHealth(1)
    NormalOfPet(1)
    NormalOfRepair(1)
    NormalOfHousing(1)
    NormalOfGift(1)
    NormalOfDonate(1)
    NormalOfSnacks(1)
    NormalOfFruits(1)
    NormalOfVegetables(1)
    NormalOfMore(1)
    IconSelected = 12; 
    document.getElementById("monthlyBudgetIconspage").classList.add("monthlyBudgetIconspageChanged")

    document.getElementById("monthlycalculator").style.display = "block"
})

document.getElementById("Electronics").addEventListener("click",()=>{
    document.getElementById("Electronics").style.color = "#fff457bd";
    NormalOfEducation(1)
    NormalOfTransport(1)
    NormalOfTea(1)
    NormalOfShopping(1)
    NormalOfFood(1)
    NormalOfTelephone(1)
    NormalOfEntertainment(1)
    NormalOfSport(1)
    NormalOfSocial(1)
    NormalOfClothing(1)
    NormalOfCar(1)
    NormalOfElectronics(1)
    NormalOfTravel(1)
    NormalOfHealth(1)
    NormalOfPet(1)
    NormalOfRepair(1)
    NormalOfHousing(1)
    NormalOfGift(1)
    NormalOfDonate(1)
    NormalOfSnacks(1)
    NormalOfFruits(1)
    NormalOfVegetables(1)
    NormalOfMore(1)
    IconSelected = 13; 
    document.getElementById("monthlyBudgetIconspage").classList.add("monthlyBudgetIconspageChanged")

    document.getElementById("monthlycalculator").style.display = "block"
})

document.getElementById("Travel").addEventListener("click",()=>{
    document.getElementById("Travel").style.color = "#fff457bd";
    NormalOfEducation(1)
    NormalOfTransport(1)
    NormalOfTea(1)
    NormalOfShopping(1)
    NormalOfFood(1)
    NormalOfTelephone(1)
    NormalOfEntertainment(1)
    NormalOfSport(1)
    NormalOfSocial(1)
    NormalOfClothing(1)
    NormalOfCar(1)
    NormalOfLiquor(1)
    NormalOfElectronics(1)
    NormalOfHealth(1)
    NormalOfPet(1)
    NormalOfRepair(1)
    NormalOfHousing(1)
    NormalOfGift(1)
    NormalOfDonate(1)
    NormalOfSnacks(1)
    NormalOfFruits(1)
    NormalOfVegetables(1)
    NormalOfMore(1)
    IconSelected = 14; 
    document.getElementById("monthlyBudgetIconspage").classList.add("monthlyBudgetIconspageChanged")

    document.getElementById("monthlycalculator").style.display = "block"
})

document.getElementById("Health").addEventListener("click",()=>{
    document.getElementById("Health").style.color = "#fff457bd";
    NormalOfEducation(1)
    NormalOfTransport(1)
    NormalOfTea(1)
    NormalOfShopping(1)
    NormalOfFood(1)
    NormalOfTelephone(1)
    NormalOfEntertainment(1)
    NormalOfSport(1)
    NormalOfSocial(1)
    NormalOfClothing(1)
    NormalOfCar(1)
    NormalOfLiquor(1)
    NormalOfElectronics(1)
    NormalOfTravel(1)
    NormalOfPet(1)
    NormalOfRepair(1)
    NormalOfHousing(1)
    NormalOfGift(1)
    NormalOfDonate(1)
    NormalOfSnacks(1)
    NormalOfFruits(1)
    NormalOfVegetables(1)
    NormalOfMore(1)
    IconSelected = 15; 
    document.getElementById("monthlyBudgetIconspage").classList.add("monthlyBudgetIconspageChanged")

    document.getElementById("monthlycalculator").style.display = "block"
})

document.getElementById("Pet").addEventListener("click",()=>{
    document.getElementById("Pet").style.color = "#fff457bd";
    NormalOfEducation(1)
    NormalOfTransport(1)
    NormalOfTea(1)
    NormalOfShopping(1)
    NormalOfFood(1)
    NormalOfTelephone(1)
    NormalOfEntertainment(1)
    NormalOfSport(1)
    NormalOfSocial(1)
    NormalOfClothing(1)
    NormalOfCar(1)
    NormalOfLiquor(1)
    NormalOfElectronics(1)
    NormalOfTravel(1)
    NormalOfHealth(1)
    NormalOfRepair(1)
    NormalOfHousing(1)
    NormalOfGift(1)
    NormalOfDonate(1)
    NormalOfSnacks(1)
    NormalOfFruits(1)
    NormalOfVegetables(1)
    NormalOfMore(1)
    IconSelected = 16; 
    document.getElementById("monthlyBudgetIconspage").classList.add("monthlyBudgetIconspageChanged")

    document.getElementById("monthlycalculator").style.display = "block"
})

document.getElementById("Repair").addEventListener("click",()=>{
    document.getElementById("Repair").style.color = "#fff457bd";
    NormalOfEducation(1)
    NormalOfTransport(1)
    NormalOfTea(1)
    NormalOfShopping(1)
    NormalOfFood(1)
    NormalOfTelephone(1)
    NormalOfEntertainment(1)
    NormalOfSport(1)
    NormalOfSocial(1)
    NormalOfClothing(1)
    NormalOfCar(1)
    NormalOfLiquor(1)
    NormalOfElectronics(1)
    NormalOfTravel(1)
    NormalOfHealth(1)
    NormalOfPet(1)
    NormalOfHousing(1)
    NormalOfGift(1)
    NormalOfDonate(1)
    NormalOfSnacks(1)
    NormalOfFruits(1)
    NormalOfVegetables(1)
    NormalOfMore(1)
    IconSelected = 17; 
    document.getElementById("monthlyBudgetIconspage").classList.add("monthlyBudgetIconspageChanged")

    document.getElementById("monthlycalculator").style.display = "block"
})

document.getElementById("Housing").addEventListener("click",()=>{
    document.getElementById("Housing").style.color = "#fff457bd";
    NormalOfEducation(1)
    NormalOfTransport(1)
    NormalOfTea(1)
    NormalOfShopping(1)
    NormalOfFood(1)
    NormalOfTelephone(1)
    NormalOfEntertainment(1)
    NormalOfSport(1)
    NormalOfSocial(1)
    NormalOfClothing(1)
    NormalOfCar(1)
    NormalOfLiquor(1)
    NormalOfElectronics(1)
    NormalOfTravel(1)
    NormalOfHealth(1)
    NormalOfPet(1)
    NormalOfRepair(1)
    NormalOfGift(1)
    NormalOfDonate(1)
    NormalOfSnacks(1)
    NormalOfFruits(1)
    NormalOfVegetables(1)
    NormalOfMore(1)
    IconSelected = 18; 
    document.getElementById("monthlyBudgetIconspage").classList.add("monthlyBudgetIconspageChanged")

    document.getElementById("monthlycalculator").style.display = "block"
})

document.getElementById("Gift").addEventListener("click",()=>{
    document.getElementById("Gift").style.color = "#fff457bd";
    NormalOfEducation(1)
    NormalOfTransport(1)
    NormalOfTea(1)
    NormalOfShopping(1)
    NormalOfFood(1)
    NormalOfTelephone(1)
    NormalOfEntertainment(1)
    NormalOfSport(1)
    NormalOfSocial(1)
    NormalOfClothing(1)
    NormalOfCar(1)
    NormalOfLiquor(1)
    NormalOfElectronics(1)
    NormalOfTravel(1)
    NormalOfHealth(1)
    NormalOfPet(1)
    NormalOfRepair(1)
    NormalOfHousing(1)
    NormalOfDonate(1)
    NormalOfSnacks(1)
    NormalOfFruits(1)
    NormalOfVegetables(1)
    NormalOfMore(1)
    IconSelected = 19; 
    document.getElementById("monthlyBudgetIconspage").classList.add("monthlyBudgetIconspageChanged")

    document.getElementById("monthlycalculator").style.display = "block"
})

document.getElementById("Donate").addEventListener("click",()=>{
    document.getElementById("Donate").style.color = "#fff457bd";
    NormalOfEducation(1)
    NormalOfTransport(1)
    NormalOfTea(1)
    NormalOfShopping(1)
    NormalOfFood(1)
    NormalOfTelephone(1)
    NormalOfEntertainment(1)
    NormalOfSport(1)
    NormalOfSocial(1)
    NormalOfClothing(1)
    NormalOfCar(1)
    NormalOfLiquor(1)
    NormalOfElectronics(1)
    NormalOfTravel(1)
    NormalOfHealth(1)
    NormalOfPet(1)
    NormalOfRepair(1)
    NormalOfHousing(1)
    NormalOfGift(1)
    NormalOfSnacks(1)
    NormalOfFruits(1)
    NormalOfVegetables(1)
    NormalOfMore(1)
    IconSelected = 20; 
    document.getElementById("monthlyBudgetIconspage").classList.add("monthlyBudgetIconspageChanged")

    document.getElementById("monthlycalculator").style.display = "block"
})

document.getElementById("Snacks").addEventListener("click",()=>{
    document.getElementById("Snacks").style.color = "#fff457bd";
    NormalOfEducation(1)
    NormalOfTransport(1)
    NormalOfTea(1)
    NormalOfShopping(1)
    NormalOfFood(1)
    NormalOfTelephone(1)
    NormalOfEntertainment(1)
    NormalOfSport(1)
    NormalOfSocial(1)
    NormalOfClothing(1)
    NormalOfCar(1)
    NormalOfLiquor(1)
    NormalOfElectronics(1)
    NormalOfTravel(1)
    NormalOfHealth(1)
    NormalOfPet(1)
    NormalOfRepair(1)
    NormalOfHousing(1)
    NormalOfGift(1)
    NormalOfDonate(1)
    NormalOfFruits(1)
    NormalOfVegetables(1)
    NormalOfMore(1)
    IconSelected = 21; 
    document.getElementById("monthlyBudgetIconspage").classList.add("monthlyBudgetIconspageChanged")

    document.getElementById("monthlycalculator").style.display = "block"
})

document.getElementById("Vegetables").addEventListener("click",()=>{
    document.getElementById("Vegetables").style.color = "#fff457bd";
    NormalOfEducation(1)
    NormalOfTransport(1)
    NormalOfTea(1)
    NormalOfShopping(1)
    NormalOfFood(1)
    NormalOfTelephone(1)
    NormalOfEntertainment(1)
    NormalOfSport(1)
    NormalOfSocial(1)
    NormalOfClothing(1)
    NormalOfCar(1)
    NormalOfLiquor(1)
    NormalOfElectronics(1)
    NormalOfTravel(1)
    NormalOfHealth(1)
    NormalOfPet(1)
    NormalOfRepair(1)
    NormalOfHousing(1)
    NormalOfGift(1)
    NormalOfDonate(1)
    NormalOfSnacks(1)
    NormalOfFruits(1)
    NormalOfMore(1)
    IconSelected = 22; 
    document.getElementById("monthlyBudgetIconspage").classList.add("monthlyBudgetIconspageChanged")

    document.getElementById("monthlycalculator").style.display = "block"
})

document.getElementById("Fruits").addEventListener("click",()=>{
    document.getElementById("Fruits").style.color = "#fff457bd";
    NormalOfEducation(1)
    NormalOfTransport(1)
    NormalOfTea(1)
    NormalOfShopping(1)
    NormalOfFood(1)
    NormalOfTelephone(1)
    NormalOfEntertainment(1)
    NormalOfSport(1)
    NormalOfSocial(1)
    NormalOfClothing(1)
    NormalOfCar(1)
    NormalOfLiquor(1)
    NormalOfElectronics(1)
    NormalOfTravel(1)
    NormalOfHealth(1)
    NormalOfPet(1)
    NormalOfRepair(1)
    NormalOfHousing(1)
    NormalOfGift(1)
    NormalOfDonate(1)
    NormalOfSnacks(1)
    NormalOfVegetables(1)
    NormalOfMore(1)
    IconSelected = 23; 
    document.getElementById("monthlyBudgetIconspage").classList.add("monthlyBudgetIconspageChanged")

    document.getElementById("monthlycalculator").style.display = "block"
})

document.getElementById("More").addEventListener("click",()=>{
    document.getElementById("More").style.color = "#fff457bd";
    NormalOfEducation(1)
    NormalOfTransport(1)
    NormalOfTea(1)
    NormalOfShopping(1)
    NormalOfFood(1)
    NormalOfTelephone(1)
    NormalOfEntertainment(1)
    NormalOfSport(1)
    NormalOfSocial(1)
    NormalOfClothing(1)
    NormalOfCar(1)
    NormalOfLiquor(1)
    NormalOfElectronics(1)
    NormalOfTravel(1)
    NormalOfHealth(1)
    NormalOfPet(1)
    NormalOfRepair(1)
    NormalOfHousing(1)
    NormalOfGift(1)
    NormalOfDonate(1)
    NormalOfSnacks(1)
    NormalOfFruits(1)
    NormalOfVegetables(1)
    IconSelected = 24; 
    document.getElementById("monthlyBudgetIconspage").classList.add("monthlyBudgetIconspageChanged")

    document.getElementById("monthlycalculator").style.display = "block"
})

// Monthly Budget Calculator

let MonthlyBudgetRupee = "";
let individualRecordRupee = "";

for(let i=0;i<=9;i++){
    document.getElementById(`${i}`).addEventListener("click",()=>{
        if(IconSelected <= 24){
            MonthlyBudgetRupee += i;
            console.log("MonthlyBudgetRupee : " +MonthlyBudgetRupee);
        }
        else{
            individualRecordRupee += i;
            console.log("individualRecordRupee ",individualRecordRupee);
        }
        displayMonthlyBudgetRupee()
    });
   
}

document.getElementById("deleteIncalculator").addEventListener("click",()=>{
    if(IconSelected <= 24){
        MonthlyBudgetRupee = ""
        console.log(MonthlyBudgetRupee);
    }
    else{
        individualRecordRupee = "";
    }
    displayMonthlyBudgetRupee()

})

document.getElementById("deleteLeftInCalculator").addEventListener("click",()=>{
    if(IconSelected <= 24){
        MonthlyBudgetRupee = MonthlyBudgetRupee.substring(0,MonthlyBudgetRupee.length-1)
        console.log(MonthlyBudgetRupee);
    }
    else{
        individualRecordRupee = individualRecordRupee.substring(0,individualRecordRupee.length - 1);
        console.log("individualRecordRupee" + individualRecordRupee);
    }
    displayMonthlyBudgetRupee()

})

function displayMonthlyBudgetRupee(){
    if(IconSelected <= 24){
        if(MonthlyBudgetRupee.length == 0){
            document.getElementById("inputOfCalculator").innerHTML = "0";
        }
        else{
            document.getElementById("inputOfCalculator").innerHTML = MonthlyBudgetRupee;
        }
    }
    else{
        if(individualRecordRupee.length == 0){
            document.getElementById("inputOfCalculator").innerHTML = "0";
        }
        else{
            document.getElementById("inputOfCalculator").innerHTML = individualRecordRupee;
        }
    }
}

let monthlyBugetByIndividualItemsArr = []
let totalMonthlyBudget = 0;
document.getElementById("monthlyBudgetOk").addEventListener("click",()=>{

    document.getElementById("monthlycalculator").style.display = "none";
    if(IconSelected <= 24){
        document.getElementById("monthlyBudgetIconspage").style.display = "none";
        document.getElementById("MonthlyBugetAddButton").style.display = "flex";
        document.getElementById("monthlyBudgetIconspage").classList.remove("monthlyBudgetIconspageChanged");
        NormalOfEducation(1)
        NormalOfTransport(1)
        NormalOfTea(1)
        NormalOfShopping(1)
        NormalOfFood(1)
        NormalOfTelephone(1)
        NormalOfEntertainment(1)
        NormalOfSport(1)
        NormalOfSocial(1)
        NormalOfClothing(1)
        NormalOfCar(1)
        NormalOfLiquor(1)
        NormalOfElectronics(1)
        NormalOfTravel(1)
        NormalOfHealth(1)
        NormalOfPet(1)
        NormalOfRepair(1)
        NormalOfHousing(1)
        NormalOfGift(1)
        NormalOfDonate(1)
        NormalOfSnacks(1)
        NormalOfFruits(1)
        NormalOfVegetables(1)
        NormalOfMore(1)
        NormalofSalary()
        NormalofInvestment()
        NormalofParttime()
        NormalofAwards()

        creatingIndividualMonthlyBuget(IconSelectedArr[IconSelected],IconArr[IconSelected],MonthlyBudgetRupee)

        document.getElementById("inputOfCalculator").value = MonthlyBudgetRupee

        document.getElementById("monthlyBudgetDetailIndividual").style.display = "block"

        //insert the individual budgets into the arr
        monthlyBugetByIndividualItemsArr.push(parseInt(MonthlyBudgetRupee));

        totalMonthlyBudget += parseInt(MonthlyBudgetRupee)

        document.getElementById("monthlyBudgetValue").innerHTML = totalMonthlyBudget

        console.log(monthlyBugetByIndividualItemsArr);
        MonthlyBudgetRupee = "";
    
    }
    else{
        document.getElementById("addPage").style.display = "none";
        NormalOfEducation(2)
        NormalOfTransport(2)
        NormalOfTea(2)
        NormalOfShopping(2)
        NormalOfFood(2)
        NormalOfTelephone(2)
        NormalOfEntertainment(2)
        NormalOfSport(2)
        NormalOfSocial(2)
        NormalOfClothing(2)
        NormalOfCar(2)
        NormalOfLiquor(2)
        NormalOfElectronics(2)
        NormalOfTravel(2)
        NormalOfHealth(2)
        NormalOfPet(2)
        NormalOfRepair(2)
        NormalOfHousing(2)
        NormalOfGift(2)
        NormalOfDonate(2)
        NormalOfSnacks(2)
        NormalOfFruits(2)
        NormalOfVegetables(2)
        NormalOfMore(2)
        NormalofSalary()
        NormalofInvestment()
        NormalofParttime()
        NormalofAwards()

        document.getElementById("recordInfo").style.display = "flex";

        console.log(individualRecordRupee + " " +IconSelectedArr[IconSelected - 24]);

        document.getElementById("inputOfCalculator").value = IconSelectedArr[IconSelected - 24] + " " +individualRecordRupee;

        creatingIndividualRecord(IconSelectedArr[IconSelected - 24],IconArr[IconSelected - 24],individualRecordRupee)

        if(IconSelected >= 49){
            totalIncome += parseInt(individualRecordRupee);
            console.log("totalIncome ",totalIncome);
        }
        else{
            totalExpense += parseInt(individualRecordRupee);
            console.log("totalExpense "+totalExpense);
        }

        displayTotalIncomeAndExpense()
        individualRecordRupee = ""

    }

    //Removing the Class to become the Add Icon page into previous width  
    console.log("Changedd Width...");
        document.getElementById("addPage").classList.remove("addPageWidthchanged")

        document.getElementById("incomeIcons").classList.remove("incomeIconsChanged")

        document.getElementById("addPageIcons").classList.remove("incomeIconsChanged")

        document.getElementById("monthlycalculator").classList.remove("monthlycalculatorChanged")

    document.getElementById("inputOfCalculator").innerHTML = "0"

    //Updating the profile Box Income and Expanse
        document.getElementById("profileIncomeValue").innerHTML = totalIncome

        document.getElementById("profileExpenseValue").innerHTML = totalExpense

        document.getElementById("profileBalanceValue").innerHTML = (totalIncome - totalExpense)
})

function displayTotalIncomeAndExpense(){

    document.getElementById("incomeValue").innerHTML = totalIncome;

    document.getElementById("expenseValue").innerHTML = totalExpense;

    document.getElementById("balanceValue").innerHTML = (totalIncome - totalExpense)

}

let noOfMonthlyBudgetsCreated = 0;

// Creating Individual Monthly Budget Box
function creatingIndividualMonthlyBuget(title,icon,budgetValue){

    // Create main container div
    const mainMonthlyBudget = document.createElement('div');
    mainMonthlyBudget.classList.add('newMainMonthlyBudget');

    // Create monthly budget heading div
    const monthlyBudgetHeading = document.createElement('div');
    monthlyBudgetHeading.classList.add('monthlyBudgetHeading');

    monthlyBudgetHeading.innerHTML = icon
    // Create paragraph for monthly budget heading
    const monthlyBudgetHeadingText = document.createElement('p');
    monthlyBudgetHeadingText.textContent = title;

    // Append paragraph to monthly budget heading div
    // monthlyBudgetHeading.appendChild(icon);
    monthlyBudgetHeading.appendChild(monthlyBudgetHeadingText);

    // Create monthly budget div
    const monthlyBudget = document.createElement('div');
    monthlyBudget.classList.add('monthlyBudget');
    monthlyBudget.setAttribute('id', 'monthlyBudget');

    // Create outer circle div
    const monthlyBudgetouterCircle = document.createElement('div');
    monthlyBudgetouterCircle.classList.add('monthlyBudgetouterCircle');

    // Create inner circle div
    const monthlyBudgetinnerCircle = document.createElement('div');
    monthlyBudgetinnerCircle.classList.add('monthlyBudgetinnerCircle');

    // Create paragraphs for inner circle
    const remainingText = document.createElement('p');
    remainingText.textContent = 'Remaining';
    const remainingValue = document.createElement('p');
    remainingValue.setAttribute('id', 'monthlyBudgetinnerCircleRemainingvalue');

    //Calculate the remaining percentage

    remainingValue.textContent = '94.9%';

    // Append paragraphs to inner circle div
    monthlyBudgetinnerCircle.appendChild(remainingText);
    monthlyBudgetinnerCircle.appendChild(remainingValue);

    // Append inner circle to outer circle
    monthlyBudgetouterCircle.appendChild(monthlyBudgetinnerCircle);

    // Create monthly budget info div
    const monthlyBudgetInfo = document.createElement('div');
    monthlyBudgetInfo.classList.add('monthlyBudgetInfo');

    // Create remaining budget div
    const monthlyBudgetRemaining = document.createElement('div');
    monthlyBudgetRemaining.classList.add('monthlyBudgetRemaining');

    // Create paragraphs for remaining budget
    const remainingHeading = document.createElement('p');
    remainingHeading.classList.add('monthlyBudgetRemainingHeading');
    remainingHeading.textContent = 'Remaining :';
    const remainingValuePara = document.createElement('p');
    remainingValuePara.classList.add('monthlyBudgetRemainingValue');
    remainingValuePara.textContent = '0';

    // Append paragraphs to remaining budget div
    monthlyBudgetRemaining.appendChild(remainingHeading);
    monthlyBudgetRemaining.appendChild(remainingValuePara);

    // Create budget div
    const monthlyBudgetBudget = document.createElement('div');
    monthlyBudgetBudget.classList.add('monthlyBudgetBudget');

    // Create paragraphs for budget
    const budgetHeading = document.createElement('p');
    budgetHeading.classList.add('monthlyBudgetBudgetHeading');
    budgetHeading.textContent = 'Budget :';
    const budgetValuePara = document.createElement('p');
    budgetValuePara.classList.add('monthlyBudgetBudgetValue');
    budgetValuePara.textContent = budgetValue;

    // Append paragraphs to budget div
    monthlyBudgetBudget.appendChild(budgetHeading);
    monthlyBudgetBudget.appendChild(budgetValuePara);

    // Create expenses div
    const monthlyBudgetExpenses = document.createElement('div');
    monthlyBudgetExpenses.classList.add('monthlyBudgetExpenses');

    // Create paragraphs for expenses
    const expensesHeading = document.createElement('p');
    expensesHeading.classList.add('monthlyBudgetExpensesHeading');
    expensesHeading.textContent = 'Expenses :';
    const expensesValuePara = document.createElement('p');
    expensesValuePara.classList.add('monthlyBudgetExpensesValue');
    expensesValuePara.textContent = '0';

    // Append paragraphs to expenses div
    monthlyBudgetExpenses.appendChild(expensesHeading);
    monthlyBudgetExpenses.appendChild(expensesValuePara);

    // Append remaining budget, budget, and expenses divs to monthly budget info div
    monthlyBudgetInfo.appendChild(monthlyBudgetRemaining);
    monthlyBudgetInfo.appendChild(document.createElement('hr'));
    monthlyBudgetInfo.appendChild(monthlyBudgetBudget);
    monthlyBudgetInfo.appendChild(monthlyBudgetExpenses);

    // Append all elements to the main container
    monthlyBudget.appendChild(monthlyBudgetouterCircle);
    monthlyBudget.appendChild(monthlyBudgetInfo);

    mainMonthlyBudget.appendChild(monthlyBudgetHeading);
    mainMonthlyBudget.appendChild(monthlyBudget);

    document.getElementById("monthlyBudgetDetailIndividual").appendChild(mainMonthlyBudget)

    noOfMonthlyBudgetsCreated++;

    setTimeout(updateTheRemainingPercentInTheMonthlyBudget,500)

}

function updateTheRemainingPercentInTheMonthlyBudget(){

    let monthlybudgetvalue = document.getElementById("monthlyBudgetValue").textContent;
    let monthlyExpenseValue = document.getElementById("monthlyBudgetExpensesValue").textContent;

    console.log("monthlybudgetvalue : "+monthlybudgetvalue);
    console.log("monthlyExpenseValue " + monthlyExpenseValue);

    let remainingPercent = (((parseInt(monthlybudgetvalue) - parseInt(monthlyExpenseValue)) * 100) / parseInt(monthlybudgetvalue))
    document.getElementById("monthlyBudgetinnerCircleRemainingvalue").innerHTML = remainingPercent + "%";
}
document.getElementById("BackFromCalculator").addEventListener("click",()=>{
    if(IconSelected <= 24){
        document.getElementById("monthlyBudgetIconspage").classList.remove("monthlyBudgetIconspageChanged");
    }
    else{
        document.getElementById("addPage").classList.remove("addPageWidthchanged")

        document.getElementById("incomeIcons").classList.remove("incomeIconsChanged")

        document.getElementById("addPageIcons").classList.remove("incomeIconsChanged")

        document.getElementById("monthlycalculator").classList.remove("monthlycalculatorChanged")
    }
    document.getElementById("monthlycalculator").style.display = "none";
})

document.getElementById("profile").addEventListener("click",()=>{
    document.getElementById("mainProfile").style.display = "block"
    document.getElementById("infoTable").style.display = "none"
    document.getElementById("recordInfo").style.display = "none";
    document.getElementById("mainMonthlyBudget").style.display = "none";
    document.getElementById("hrLineOfMonthlyBudget").style.display = "none";
    document.getElementById("monthlyBudgetDetailIndividual").style.display = "none";
    document.getElementById("monthlyBudgetIconspage").style.display = "none";
    document.getElementById("monthlycalculator").style.display = "none";
    document.getElementById("addPage").style.display = "none";
    document.getElementById("MonthlyBugetAddButton").style.display = "none";
})

let noOfRecordsCreated = 0;
function creatingIndividualRecord(recordNameVar,recordIcon,rupee){

    // Create individual record container
    var individualRecordContainer = document.createElement("div");
    individualRecordContainer.classList.add("individualRecordContainer");

    // individualRecordContainer.style.height = "10vh";

    // Create icon
    var icon = document.createElement("i");
    icon.innerHTML = recordIcon;
    icon.id = "iconInRecord";

    // Create budget name
    var recordName = document.createElement("p");
    recordName.classList.add("recordName");
    recordName.textContent = recordNameVar;

    // Create spacer
    var spacer = document.createElement("p");
    spacer.classList.add("spacerForindividualRecord");

    // Create respective budget amount
    var recordAmt = document.createElement("p");

    if(IconSelected <= 48){
        recordAmt.classList.add("respectiveRecordAmt");
        console.log("rrrrrrrrrr");
        recordAmt.textContent = "- " + rupee
        recordAmt.style.color = "red"
    }
    else{
        recordAmt.classList.add("respectiveRecordAmt");
        console.log("gggggggggg");
        recordAmt.textContent = "+ " + rupee
        recordAmt.style.color = "green"
    }

    // Append elements to individual record container
    individualRecordContainer.appendChild(icon);
    individualRecordContainer.appendChild(recordName);
    individualRecordContainer.appendChild(spacer);
    individualRecordContainer.appendChild(recordAmt);

    // Append the parent container to the document body or any desired element
    document.getElementById("recordInfo").appendChild(individualRecordContainer);

    noOfRecordsCreated++;
}

document.getElementById("ExpenseHeading").addEventListener("click",()=>{
    document.getElementById("addPageIcons").style.display = "grid";
    document.getElementById("incomeIcons").style.display = "none";
    document.getElementById("ExpenseHeading").style.color = "#fff457bd"
    document.getElementById("IncomeHeading").style.color = "whitesmoke"
})

document.getElementById("IncomeHeading").addEventListener("click",()=>{
    document.getElementById("addPageIcons").style.display = "none";
    document.getElementById("incomeIcons").style.display = "grid";
    document.getElementById("IncomeHeading").style.color = "#fff457bd"
    document.getElementById("ExpenseHeading").style.color = "whitesmoke"
})

document.getElementById("AddEducation").addEventListener("click",()=>{
    document.getElementById("AddEducation").style.color = "#fff457bd";
    NormalOfTransport(2)
    NormalOfTea(2)
    NormalOfShopping(2)
    NormalOfFood(2)
    NormalOfTelephone(2)
    NormalOfEntertainment(2)
    NormalOfSport(2)
    NormalOfSocial(2)
    NormalOfClothing(2)
    NormalOfCar(2)
    NormalOfLiquor(2)
    NormalOfElectronics(2)
    NormalOfTravel(2)
    NormalOfHealth(2)
    NormalOfPet(2)
    NormalOfRepair(2)
    NormalOfHousing(2)
    NormalOfGift(2)
    NormalOfDonate(2)
    NormalOfSnacks(2)
    NormalOfFruits(2)
    NormalOfVegetables(2)
    NormalOfMore(2)

    IconSelected = 25; 

    wrapTheAddPage()
    document.getElementById("incomeIcons").style.display = "none"
})

document.getElementById("AddTransport").addEventListener("click",()=>{
    document.getElementById("AddTransport").style.color = "#fff457bd";
    NormalOfEducation(2)
    NormalOfTea(2)
    NormalOfShopping(2)
    NormalOfFood(2)
    NormalOfTelephone(2)
    NormalOfEntertainment(2)
    NormalOfSport(2)
    NormalOfSocial(2)
    NormalOfClothing(2)
    NormalOfCar(2)
    NormalOfLiquor(2)
    NormalOfElectronics(2)
    NormalOfTravel(2)
    NormalOfHealth(2)
    NormalOfPet(2)
    NormalOfRepair(2)
    NormalOfHousing(2)
    NormalOfGift(2)
    NormalOfDonate(2)
    NormalOfSnacks(2)
    NormalOfFruits(2)
    NormalOfVegetables(2)
    NormalOfMore(2)
    IconSelected = 26; 
  
    wrapTheAddPage()
    document.getElementById("incomeIcons").style.display = "none"
})

document.getElementById("AddTea").addEventListener("click",()=>{
    document.getElementById("AddTea").style.color = "#fff457bd";
    NormalOfEducation(2)
    NormalOfTransport(2)
    NormalOfShopping(2)
    NormalOfFood(2)
    NormalOfTelephone(2)
    NormalOfEntertainment(2)
    NormalOfSport(2)
    NormalOfSocial(2)
    NormalOfClothing(2)
    NormalOfCar(2)
    NormalOfLiquor(2)
    NormalOfElectronics(2)
    NormalOfTravel(2)
    NormalOfHealth(2)
    NormalOfPet(2)
    NormalOfRepair(2)
    NormalOfHousing(2)
    NormalOfGift(2)
    NormalOfDonate(2)
    NormalOfSnacks(2)
    NormalOfFruits(2)
    NormalOfVegetables(2)
    NormalOfMore(2)
    IconSelected = 27; 
   
    wrapTheAddPage()
    document.getElementById("incomeIcons").style.display = "none"
})

document.getElementById("AddShopping").addEventListener("click",()=>{
    document.getElementById("AddShopping").style.color = "#fff457bd";
    NormalOfEducation(2)
    NormalOfTransport(2)
    NormalOfTea(2)
    NormalOfFood(2)
    NormalOfTelephone(2)
    NormalOfEntertainment(2)
    NormalOfSport(2)
    NormalOfSocial(2)
    NormalOfClothing(2)
    NormalOfCar(2)
    NormalOfLiquor(2)
    NormalOfElectronics(2)
    NormalOfTravel(2)
    NormalOfHealth(2)
    NormalOfPet(2)
    NormalOfRepair(2)
    NormalOfHousing(2)
    NormalOfGift(2)
    NormalOfDonate(2)
    NormalOfSnacks(2)
    NormalOfFruits(2)
    NormalOfVegetables(2)
    NormalOfMore(2)
    IconSelected = 28; 
   
    wrapTheAddPage()
    document.getElementById("incomeIcons").style.display = "none"
})

document.getElementById("AddFood").addEventListener("click",()=>{
    document.getElementById("AddFood").style.color = "#fff457bd";
    NormalOfEducation(2)
    NormalOfTransport(2)
    NormalOfTea(2)
    NormalOfShopping(2)
    NormalOfTelephone(2)
    NormalOfEntertainment(2)
    NormalOfSport(2)
    NormalOfSocial(2)
    NormalOfClothing(2)
    NormalOfCar(2)
    NormalOfLiquor(2)
    NormalOfElectronics(2)
    NormalOfTravel(2)
    NormalOfHealth(2)
    NormalOfPet(2)
    NormalOfRepair(2)
    NormalOfHousing(2)
    NormalOfGift(2)
    NormalOfDonate(2)
    NormalOfSnacks(2)
    NormalOfFruits(2)
    NormalOfVegetables(2)
    NormalOfMore(2)
    IconSelected = 29; 
    
    wrapTheAddPage()
    document.getElementById("incomeIcons").style.display = "none"
})

document.getElementById("AddTelephone").addEventListener("click",()=>{
    document.getElementById("AddTelephone").style.color = "#fff457bd";
    NormalOfEducation(2)
    NormalOfTransport(2)
    NormalOfTea(2)
    NormalOfShopping(2)
    NormalOfFood(2)
    NormalOfEntertainment(2)
    NormalOfSport(2)
    NormalOfSocial(2)
    NormalOfClothing(2)
    NormalOfCar(2)
    NormalOfLiquor(2)
    NormalOfElectronics(2)
    NormalOfTravel(2)
    NormalOfHealth(2)
    NormalOfPet(2)
    NormalOfRepair(2)
    NormalOfHousing(2)
    NormalOfGift(2)
    NormalOfDonate(2)
    NormalOfSnacks(2)
    NormalOfFruits(2)
    NormalOfVegetables(2)
    NormalOfMore(2)
    IconSelected = 30;
   
    wrapTheAddPage()
    document.getElementById("incomeIcons").style.display = "none"
})

document.getElementById("AddEntertainment").addEventListener("click",()=>{
    document.getElementById("AddEntertainment").style.color = "#fff457bd";
    NormalOfEducation(2)
    NormalOfTransport(2)
    NormalOfTea(2)
    NormalOfShopping(2)
    NormalOfFood(2)
    NormalOfTelephone(2)
    NormalOfSport(2)
    NormalOfSocial(2)
    NormalOfClothing(2)
    NormalOfCar(2)
    NormalOfLiquor(2)
    NormalOfElectronics(2)
    NormalOfTravel(2)
    NormalOfHealth(2)
    NormalOfPet(2)
    NormalOfRepair(2)
    NormalOfHousing(2)
    NormalOfGift(2)
    NormalOfDonate(2)
    NormalOfSnacks(2)
    NormalOfFruits(2)
    NormalOfVegetables(2)
    NormalOfMore(2)
    IconSelected = 31; 

    wrapTheAddPage()
    document.getElementById("incomeIcons").style.display = "none"
})

document.getElementById("AddSport").addEventListener("click",()=>{
    document.getElementById("AddSport").style.color = "#fff457bd";
    NormalOfEducation(2)
    NormalOfTransport(2)
    NormalOfTea(2)
    NormalOfShopping(2)
    NormalOfFood(2)
    NormalOfTelephone(2)
    NormalOfEntertainment(2)
    NormalOfSocial(2)
    NormalOfClothing(2)
    NormalOfCar(2)
    NormalOfLiquor(2)
    NormalOfElectronics(2)
    NormalOfTravel(2)
    NormalOfHealth(2)
    NormalOfPet(2)
    NormalOfRepair(2)
    NormalOfHousing(2)
    NormalOfGift(2)
    NormalOfDonate(2)
    NormalOfSnacks(2)
    NormalOfFruits(2)
    NormalOfVegetables(2)
    NormalOfMore(2)
    IconSelected = 32; 
    
    wrapTheAddPage()
    document.getElementById("incomeIcons").style.display = "none"
})

document.getElementById("AddSocial").addEventListener("click",()=>{
    document.getElementById("AddSocial").style.color = "#fff457bd";
    NormalOfEducation(2)
    NormalOfTransport(2)
    NormalOfTea(2)
    NormalOfShopping(2)
    NormalOfFood(2)
    NormalOfTelephone(2)
    NormalOfEntertainment(2)
    NormalOfSport(2)
    NormalOfClothing(2)
    NormalOfCar(2)
    NormalOfLiquor(2)
    NormalOfElectronics(2)
    NormalOfTravel(2)
    NormalOfHealth(2)
    NormalOfPet(2)
    NormalOfRepair(2)
    NormalOfHousing(2)
    NormalOfGift(2)
    NormalOfDonate(2)
    NormalOfSnacks(2)
    NormalOfFruits(2)
    NormalOfVegetables(2)
    NormalOfMore(2)
    IconSelected = 33; 
    
    wrapTheAddPage()
    document.getElementById("incomeIcons").style.display = "none"
})

document.getElementById("AddClothing").addEventListener("click",()=>{
    document.getElementById("AddClothing").style.color = "#fff457bd";
    NormalOfEducation(2)
    NormalOfTransport(2)
    NormalOfTea(2)
    NormalOfShopping(2)
    NormalOfFood(2)
    NormalOfTelephone(2)
    NormalOfEntertainment(2)
    NormalOfSport(2)
    NormalOfSocial(2)
    NormalOfCar(2)
    NormalOfLiquor(2)
    NormalOfElectronics(2)
    NormalOfTravel(2)
    NormalOfHealth(2)
    NormalOfPet(2)
    NormalOfRepair(2)
    NormalOfHousing(2)
    NormalOfGift(2)
    NormalOfDonate(2)
    NormalOfSnacks(2)
    NormalOfFruits(2)
    NormalOfVegetables(2)
    NormalOfMore(2)
    IconSelected = 34; 
    
    wrapTheAddPage()
    document.getElementById("incomeIcons").style.display = "none"
})

document.getElementById("AddCar").addEventListener("click",()=>{
    document.getElementById("AddCar").style.color = "#fff457bd";
    NormalOfEducation(2)
    NormalOfTransport(2)
    NormalOfTea(2)
    NormalOfShopping(2)
    NormalOfFood(2)
    NormalOfTelephone(2)
    NormalOfEntertainment(2)
    NormalOfSport(2)
    NormalOfSocial(2)
    NormalOfClothing(2)
    NormalOfLiquor(2)
    NormalOfElectronics(2)
    NormalOfTravel(2)
    NormalOfHealth(2)
    NormalOfPet(2)
    NormalOfRepair(2)
    NormalOfHousing(2)
    NormalOfGift(2)
    NormalOfDonate(2)
    NormalOfSnacks(2)
    NormalOfFruits(2)
    NormalOfVegetables(2)
    NormalOfMore(2)
    IconSelected = 35; 
    
    wrapTheAddPage()
    document.getElementById("incomeIcons").style.display = "none"
})

document.getElementById("AddLiquor").addEventListener("click",()=>{
    document.getElementById("AddLiquor").style.color = "#fff457bd";
    NormalOfEducation(2)
    NormalOfTransport(2)
    NormalOfTea(2)
    NormalOfShopping(2)
    NormalOfFood(2)
    NormalOfTelephone(2)
    NormalOfEntertainment(2)
    NormalOfSport(2)
    NormalOfSocial(2)
    NormalOfClothing(2)
    NormalOfCar(2)
    NormalOfElectronics(2)
    NormalOfTravel(2)
    NormalOfHealth(2)
    NormalOfPet(2)
    NormalOfRepair(2)
    NormalOfHousing(2)
    NormalOfGift(2)
    NormalOfDonate(2)
    NormalOfSnacks(2)
    NormalOfFruits(2)
    NormalOfVegetables(2)
    NormalOfMore(2)
    IconSelected = 36; 

    wrapTheAddPage()
    document.getElementById("incomeIcons").style.display = "none"
})

document.getElementById("AddElectronics").addEventListener("click",()=>{
    document.getElementById("AddElectronics").style.color = "#fff457bd";
    NormalOfEducation(2)
    NormalOfTransport(2)
    NormalOfTea(2)
    NormalOfShopping(2)
    NormalOfFood(2)
    NormalOfTelephone(2)
    NormalOfEntertainment(2)
    NormalOfSport(2)
    NormalOfSocial(2)
    NormalOfClothing(2)
    NormalOfCar(2)
    NormalOfTravel(2)
    NormalOfHealth(2)
    NormalOfPet(2)
    NormalOfRepair(2)
    NormalOfHousing(2)
    NormalOfGift(2)
    NormalOfDonate(2)
    NormalOfSnacks(2)
    NormalOfFruits(2)
    NormalOfVegetables(2)
    NormalOfMore(2)
    IconSelected = 37; 

    wrapTheAddPage()
    document.getElementById("incomeIcons").style.display = "none"
})

document.getElementById("AddTravel").addEventListener("click",()=>{
    document.getElementById("AddTravel").style.color = "#fff457bd";
    NormalOfEducation(2)
    NormalOfTransport(2)
    NormalOfTea(2)
    NormalOfShopping(2)
    NormalOfFood(2)
    NormalOfTelephone(2)
    NormalOfEntertainment(2)
    NormalOfSport(2)
    NormalOfSocial(2)
    NormalOfClothing(2)
    NormalOfCar(2)
    NormalOfLiquor(2)
    NormalOfElectronics(2)
    NormalOfHealth(2)
    NormalOfPet(2)
    NormalOfRepair(2)
    NormalOfHousing(2)
    NormalOfGift(2)
    NormalOfDonate(2)
    NormalOfSnacks(2)
    NormalOfFruits(2)
    NormalOfVegetables(2)
    NormalOfMore(2)
    IconSelected = 38; 
    
    wrapTheAddPage()
    document.getElementById("incomeIcons").style.display = "none"
})

document.getElementById("AddHealth").addEventListener("click",()=>{
    document.getElementById("AddHealth").style.color = "#fff457bd";
    NormalOfEducation(2)
    NormalOfTransport(2)
    NormalOfTea(2)
    NormalOfShopping(2)
    NormalOfFood(2)
    NormalOfTelephone(2)
    NormalOfEntertainment(2)
    NormalOfSport(2)
    NormalOfSocial(2)
    NormalOfClothing(2)
    NormalOfCar(2)
    NormalOfLiquor(2)
    NormalOfElectronics(2)
    NormalOfTravel(2)
    NormalOfPet(2)
    NormalOfRepair(2)
    NormalOfHousing(2)
    NormalOfGift(2)
    NormalOfDonate(2)
    NormalOfSnacks(2)
    NormalOfFruits(2)
    NormalOfVegetables(2)
    NormalOfMore(2)
    IconSelected = 39; 
    
    wrapTheAddPage()
    document.getElementById("incomeIcons").style.display = "none"
})

document.getElementById("AddPet").addEventListener("click",()=>{
    document.getElementById("AddPet").style.color = "#fff457bd";
    NormalOfEducation(2)
    NormalOfTransport(2)
    NormalOfTea(2)
    NormalOfShopping(2)
    NormalOfFood(2)
    NormalOfTelephone(2)
    NormalOfEntertainment(2)
    NormalOfSport(2)
    NormalOfSocial(2)
    NormalOfClothing(2)
    NormalOfCar(2)
    NormalOfLiquor(2)
    NormalOfElectronics(2)
    NormalOfTravel(2)
    NormalOfHealth(2)
    NormalOfRepair(2)
    NormalOfHousing(2)
    NormalOfGift(2)
    NormalOfDonate(2)
    NormalOfSnacks(2)
    NormalOfFruits(2)
    NormalOfVegetables(2)
    NormalOfMore(2)
    IconSelected = 40; 
    
    wrapTheAddPage()
    document.getElementById("incomeIcons").style.display = "none"
})

document.getElementById("AddRepair").addEventListener("click",()=>{
    document.getElementById("AddRepair").style.color = "#fff457bd";
    NormalOfEducation(2)
    NormalOfTransport(2)
    NormalOfTea(2)
    NormalOfShopping(2)
    NormalOfFood(2)
    NormalOfTelephone(2)
    NormalOfEntertainment(2)
    NormalOfSport(2)
    NormalOfSocial(2)
    NormalOfClothing(2)
    NormalOfCar(2)
    NormalOfLiquor(2)
    NormalOfElectronics(2)
    NormalOfTravel(2)
    NormalOfHealth(2)
    NormalOfPet(2)
    NormalOfHousing(2)
    NormalOfGift(2)
    NormalOfDonate(2)
    NormalOfSnacks(2)
    NormalOfFruits(2)
    NormalOfVegetables(2)
    NormalOfMore(2)
    IconSelected = 41; 
    
    wrapTheAddPage()
    document.getElementById("incomeIcons").style.display = "none"
})

document.getElementById("AddHousing").addEventListener("click",()=>{
    document.getElementById("AddHousing").style.color = "#fff457bd";
    NormalOfEducation(2)
    NormalOfTransport(2)
    NormalOfTea(2)
    NormalOfShopping(2)
    NormalOfFood(2)
    NormalOfTelephone(2)
    NormalOfEntertainment(2)
    NormalOfSport(2)
    NormalOfSocial(2)
    NormalOfClothing(2)
    NormalOfCar(2)
    NormalOfLiquor(2)
    NormalOfElectronics(2)
    NormalOfTravel(2)
    NormalOfHealth(2)
    NormalOfPet(2)
    NormalOfRepair(2)
    NormalOfGift(2)
    NormalOfDonate(2)
    NormalOfSnacks(2)
    NormalOfFruits(2)
    NormalOfVegetables(2)
    NormalOfMore(2)
    IconSelected = 42; 
    
    wrapTheAddPage()
    document.getElementById("incomeIcons").style.display = "none"
})

document.getElementById("AddGift").addEventListener("click",()=>{
    document.getElementById("AddGift").style.color = "#fff457bd";
    NormalOfEducation(2)
    NormalOfTransport(2)
    NormalOfTea(2)
    NormalOfShopping(2)
    NormalOfFood(2)
    NormalOfTelephone(2)
    NormalOfEntertainment(2)
    NormalOfSport(2)
    NormalOfSocial(2)
    NormalOfClothing(2)
    NormalOfCar(2)
    NormalOfLiquor(2)
    NormalOfElectronics(2)
    NormalOfTravel(2)
    NormalOfHealth(2)
    NormalOfPet(2)
    NormalOfRepair(2)
    NormalOfHousing(2)
    NormalOfDonate(2)
    NormalOfSnacks(2)
    NormalOfFruits(2)
    NormalOfVegetables(2)
    NormalOfMore(2)
    IconSelected = 43; 
    
    wrapTheAddPage()
    document.getElementById("incomeIcons").style.display = "none"
})

document.getElementById("AddDonate").addEventListener("click",()=>{
    document.getElementById("AddDonate").style.color = "#fff457bd";
    NormalOfEducation(2)
    NormalOfTransport(2)
    NormalOfTea(2)
    NormalOfShopping(2)
    NormalOfFood(2)
    NormalOfTelephone(2)
    NormalOfEntertainment(2)
    NormalOfSport(2)
    NormalOfSocial(2)
    NormalOfClothing(2)
    NormalOfCar(2)
    NormalOfLiquor(2)
    NormalOfElectronics(2)
    NormalOfTravel(2)
    NormalOfHealth(2)
    NormalOfPet(2)
    NormalOfRepair(2)
    NormalOfHousing(2)
    NormalOfGift(2)
    NormalOfSnacks(2)
    NormalOfFruits(2)
    NormalOfVegetables(2)
    NormalOfMore(2)
    IconSelected = 44; 
    
    wrapTheAddPage()
    document.getElementById("incomeIcons").style.display = "none"
})

document.getElementById("AddSnacks").addEventListener("click",()=>{
    document.getElementById("AddSnacks").style.color = "#fff457bd";
    NormalOfEducation(2)
    NormalOfTransport(2)
    NormalOfTea(2)
    NormalOfShopping(2)
    NormalOfFood(2)
    NormalOfTelephone(2)
    NormalOfEntertainment(2)
    NormalOfSport(2)
    NormalOfSocial(2)
    NormalOfClothing(2)
    NormalOfCar(2)
    NormalOfLiquor(2)
    NormalOfElectronics(2)
    NormalOfTravel(2)
    NormalOfHealth(2)
    NormalOfPet(2)
    NormalOfRepair(2)
    NormalOfHousing(2)
    NormalOfGift(2)
    NormalOfDonate(2)
    NormalOfFruits(2)
    NormalOfVegetables(2)
    NormalOfMore(2)
    IconSelected = 45; 
    
    wrapTheAddPage()
    document.getElementById("incomeIcons").style.display = "none"
})

document.getElementById("AddVegetables").addEventListener("click",()=>{
    document.getElementById("AddVegetables").style.color = "#fff457bd";
    NormalOfEducation(2)
    NormalOfTransport(2)
    NormalOfTea(2)
    NormalOfShopping(2)
    NormalOfFood(2)
    NormalOfTelephone(2)
    NormalOfEntertainment(2)
    NormalOfSport(2)
    NormalOfSocial(2)
    NormalOfClothing(2)
    NormalOfCar(2)
    NormalOfLiquor(2)
    NormalOfElectronics(2)
    NormalOfTravel(2)
    NormalOfHealth(2)
    NormalOfPet(2)
    NormalOfRepair(2)
    NormalOfHousing(2)
    NormalOfGift(2)
    NormalOfDonate(2)
    NormalOfSnacks(2)
    NormalOfFruits(2)
    NormalOfMore(2)
    IconSelected = 46; 
    
    wrapTheAddPage()
    document.getElementById("incomeIcons").style.display = "none"
})

document.getElementById("AddFruits").addEventListener("click",()=>{
    document.getElementById("AddFruits").style.color = "#fff457bd";
    NormalOfEducation(2)
    NormalOfTransport(2)
    NormalOfTea(2)
    NormalOfShopping(2)
    NormalOfFood(2)
    NormalOfTelephone(2)
    NormalOfEntertainment(2)
    NormalOfSport(2)
    NormalOfSocial(2)
    NormalOfClothing(2)
    NormalOfCar(2)
    NormalOfLiquor(2)
    NormalOfElectronics(2)
    NormalOfTravel(2)
    NormalOfHealth(2)
    NormalOfPet(2)
    NormalOfRepair(2)
    NormalOfHousing(2)
    NormalOfGift(2)
    NormalOfDonate(2)
    NormalOfSnacks(2)
    NormalOfVegetables(2)
    NormalOfMore(2)
    IconSelected = 47; 
    
    wrapTheAddPage()
    document.getElementById("incomeIcons").style.display = "none"
})

document.getElementById("AddMore").addEventListener("click",()=>{
    document.getElementById("AddMore").style.color = "#fff457bd";
    NormalOfEducation(2)
    NormalOfTransport(2)
    NormalOfTea(2)
    NormalOfShopping(2)
    NormalOfFood(2)
    NormalOfTelephone(2)
    NormalOfEntertainment(2)
    NormalOfSport(2)
    NormalOfSocial(2)
    NormalOfClothing(2)
    NormalOfCar(2)
    NormalOfLiquor(2)
    NormalOfElectronics(2)
    NormalOfTravel(2)
    NormalOfHealth(2)
    NormalOfPet(2)
    NormalOfRepair(2)
    NormalOfHousing(2)
    NormalOfGift(2)
    NormalOfDonate(2)
    NormalOfSnacks(2)
    NormalOfFruits(2)
    NormalOfVegetables(2)
    IconSelected = 48;

    wrapTheAddPage()
    document.getElementById("incomeIcons").style.display = "none"
})

function NormalofSalary(){
    document.getElementById("Salary").style.color = "whitesmoke"
   
}
function NormalofInvestment(){
    document.getElementById("Investment").style.color = "whitesmoke"
  
}
function NormalofParttime(){
    document.getElementById("Part-time").style.color = "whitesmoke"
}
function NormalofAwards(){
    document.getElementById("Awards").style.color = "whitesmoke"
}

function wrapTheAddPage(){

    document.getElementById("incomeIcons").classList.add("incomeIconsChanged")
    
    document.getElementById("addPageIcons").classList.add("incomeIconsChanged")

    document.getElementById("addPage").classList.add("addPageWidthchanged")

    document.getElementById("monthlycalculator").classList.add("monthlycalculatorChanged")

    document.getElementById("monthlycalculator").style.display = "block"

}
document.getElementById("Salary").addEventListener("click",()=>{
    document.getElementById("Salary").style.color = "#fff457bd";
    IconSelected = 49;

    wrapTheAddPage();

    NormalofInvestment();
    NormalofParttime();
    NormalofAwards();
})

document.getElementById("Investment").addEventListener("click",()=>{
    document.getElementById("Investment").style.color = "#fff457bd";
    IconSelected = 50;

   wrapTheAddPage();

    NormalofSalary();
    NormalofParttime();
    NormalofAwards();

})

document.getElementById("Part-time").addEventListener("click",()=>{
    document.getElementById("Part-time").style.color = "#fff457bd";
    IconSelected = 51;

    wrapTheAddPage();

    NormalofSalary();
    NormalofInvestment();
    NormalofAwards();

})

document.getElementById("Awards").addEventListener("click",()=>{
    document.getElementById("Awards").style.color = "#fff457bd";
    IconSelected = 52;

    wrapTheAddPage();

    NormalofSalary();
    NormalofInvestment();
    NormalofParttime();
})

document.getElementById("add").addEventListener("click",()=>{
    
    document.getElementById("infoTable").style.display = "flex"
    document.getElementById("recordInfo").style.display = "none"
    document.getElementById("mainMonthlyBudget").style.display = "none"
    document.getElementById("hrLineOfMonthlyBudget").style.display = "none"
    document.getElementById("monthlyBudgetDetailIndividual").style.display = "none"
    document.getElementById("MonthlyBugetAddButton").style.display = "none"
    document.getElementById("monthlyBudgetIconspage").style.display = "none"
    document.getElementById("monthlycalculator").style.display = "none"
    document.getElementById("mainProfile").style.display = "none"
    document.getElementById("addPage").style.display = "flex"

})

document.getElementById("signup").addEventListener("click",()=>{
    
})