export const goToTripDetails = (navigate) => {
    navigate("/admin/trips/:id")
}

export const goToAdminPage = (navigate) => {
    navigate("/admin/trips/list")
}

export const goToApplicationFormPage = (navigate) => {
    navigate("/trips/application")
}

export const goToCreateTripPage = (navigate) => {
    navigate("/admin/trips/create")
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