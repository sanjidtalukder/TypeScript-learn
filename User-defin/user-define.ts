let userId: string | number |boolean;
userId = "101";
userId = 101;
userId= true;

function disPlayUserInfo(userId:string|number){
    console.log(userId)
}
disPlayUserInfo("1001")
disPlayUserInfo(101)