export enum REG_EXP_PATTERNS{
    EmailPattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,3}$",
    PasswordPattern="^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$",
    MobilePattern="[6789][0-9]{2}-[0-9]{3}-[0-9]{4}",
}