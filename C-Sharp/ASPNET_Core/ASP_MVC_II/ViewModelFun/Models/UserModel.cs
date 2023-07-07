#pragma warning disable CS8618
namespace ViewModelFun.Models;

public class UserModel
{
    public string FirstName {get;set;}
    public string LastName {get;set;}

    public UserModel(string firstname, string lastname)
    {
        FirstName = firstname;
        LastName = lastname;
    }
}