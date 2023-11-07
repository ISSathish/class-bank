class Bankaccount{
	constructor(accountnumber,balance){
		this.accountnumber=accountnumber;
		this.balance=balance;
	}
	deposit(a){
		let c=this.balance+a;
		console.log(`deposit ${c}`)	
		this.balance=c;
	}
	withdraw(b){
		let d=this.balance-b;
		console.log(`withdraw ${d}`)
		
	}
}
let ans=new Bankaccount(10122030,1000)
ans.deposit(20);
ans.withdraw(30);