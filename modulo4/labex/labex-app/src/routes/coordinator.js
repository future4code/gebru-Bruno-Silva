export const goToTripDetails = (navigate) => {
    navigate("/admin/trips/:id")
}

export const goToLogin = (navigate) => {
    navigate("/login")
}

export const goBack = (navigate) => {
    navigate(-1)
}

export const goToHomePage = (navigate) => {
    navigate("/")
}