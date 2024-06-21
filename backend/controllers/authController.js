export const signUp = async (req,res) => {
    res.json({
        data: "You hit the signup endpoint",
    });
}

export const login = async (req,res) => {
    res.json({
        data: "You hit the Login endpoint",
    });
}

export const logOut = async (req,res) => {
    res.json({
        data: "You hit the LogOut endpoint",
    });
}