const UserProfile = ({ pfp, username }: { pfp: string; username: string }) => {
    return (
        <div className="flex justify-between items-center space-x-[28px]">
            <img
                src={pfp}
                alt="profile picture"
                className="md:w-[56px] md:h-[56px] w-[40px] h-[40px]"
            />
            <div>{username}</div>
        </div>
    );
};

export default UserProfile;
