import { MarkUnreadChatAlt, EventAvailable, PersonAdd } from "@mui/icons-material";

export const Users = [
  {
    id: 1,
    profilePicture: "assets/person/1.jpeg",
    username: "Lynette Wanjiku",
  },
  {
    id: 2,
    profilePicture: "assets/person/2.jpeg",
    username: "John Doe",
  },
  {
    id: 3,
    profilePicture: "assets/person/3.jpeg",
    username: "Asha Patel",
  },
  {
    id: 4,
    profilePicture: "assets/person/4.jpeg",
    username: "Elijah Kim",
  },
  {
    id: 5,
    profilePicture: "assets/person/5.jpeg",
    username: "Maya Singh",
  },
  {
    id: 6,
    profilePicture: "assets/person/6.jpeg",
    username: "Jackson Chen",
  },
  {
    id: 7,
    profilePicture: "assets/person/7.jpeg",
    username: "Oliver Brown",
  },
  {
    id: 8,
    profilePicture: "assets/person/8.jpeg",
    username: "Sofia Rodriguez",
  },
  {
    id: 9,
    profilePicture: "assets/person/9.jpeg",
    username: "Sebastian Li",
  },
  {
    id: 10,
    profilePicture: "assets/person/10.jpeg",
    username: "Isabella Jones",
  },
];

export const Posts = [
  {
    id: 1,
    desc: "Love For All, Hatred For None.",
    photo: "assets/posts/1.jpeg",
    date: "5 mins ago",
    userId: 1,
    like: 32,
    comment: 9,
  },
  {
    id: 2,
    photo: "assets/posts/2.jpeg",
    date: "15 mins ago",
    userId: 2,
    like: 2,
    comment: 1,
  },
  {
    id: 3,
    desc: "Every moment is a fresh beginning.",
    photo: "assets/posts/3.jpeg",
    date: "1 hour ago",
    userId: 3,
    like: 61,
    comment: 2,
  },
  {
    id: 4,
    photo: "assets/posts/4.jpeg",
    date: "4 hours ago",
    userId: 4,
    like: 7,
    comment: 3,
  },
  {
    id: 5,
    photo: "assets/posts/5.jpeg",
    date: "5 hours ago",
    userId: 5,
    like: 23,
    comment: 5,
  },
  {
    id: 6,
    photo: "assets/posts/6.jpeg",
    date: "1 day ago",
    userId: 6,
    like: 44,
    comment: 6,
  },
  {
    id: 7,
    desc: "Never regret anything that made you smile.",
    photo: "assets/posts/7.jpeg",
    date: "2 days ago",
    userId: 7,
    like: 52,
    comment: 3,
  },
  {
    id: 8,
    photo: "assets/posts/8.jpeg",
    date: "3 days ago",
    userId: 8,
    like: 15,
    comment: 1,
  },
  {
    id: 9,
    desc: "Change the world by being yourself.",
    photo: "assets/posts/9.jpeg",
    date: "5 days ago",
    userId: 9,
    like: 11,
    comment: 2,
  },
  {
    id: 10,
    photo: "assets/posts/10.jpeg",
    date: "1 week ago",
    userId: 10,
    like: 104,
    comment: 12,
  },
];

export const notifications = [
  {
    id: 1,
    message: 'New message from John',
    icon: <MarkUnreadChatAlt/>,
    date: "1 min ago"
  },
  {
    id: 2,
    message: 'New event starting in 1 hour',
    icon: <EventAvailable/>,
    date: "2 mins ago"
  },
  {
    id: 3,
    message: 'You have a new friend request',
    icon: <PersonAdd/>,
    date: "3 mins ago"
  },
];

export const chats = [
  {
    id: 1,
    profilePicture: "assets/person/2.jpeg",
    username: "John Doe",
    message: 'Hi, how are you..?',
    date: "1 min ago"
  },
  {
    id: 2,
    profilePicture: "assets/person/3.jpeg",
    username: "Asha Patel",
    message: 'Hello, did you meet the...',
    date: "2 min ago"
  },
  {
    id: 3,
    profilePicture: "assets/person/5.jpeg",
    username: "Maya Singh",
    message: 'Morning, how was your night..?',
    date: "3 min ago"
  },
  {
    id: 4,
    profilePicture: "assets/person/9.jpeg",
    username: "Sebastian Li",
    message: 'Hi, do you mind send..?',
    date: "5 min ago"
  },
];