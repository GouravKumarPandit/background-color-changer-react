function BackgroundScreen({children, bgColor}) {
    return (
        <div className={`${bgColor} h-screen`}>{children}</div>
    )
}

export default BackgroundScreen;