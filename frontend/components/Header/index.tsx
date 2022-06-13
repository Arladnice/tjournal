import { Avatar, Button, IconButton, Paper } from "@material-ui/core";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Header.module.scss";
import {
  SearchOutlined as SearchIcon,
  SmsOutlined as MessagesIcon,
  NotificationsNoneOutlined as NotificationsIcon,
  Menu as MenuIcon,
  ExpandMore as ArrowBottom,
} from "@material-ui/icons";

const Header: React.FC = () => {
  return (
    <Paper classes={{ root: styles.root }} elevation={0} className="mb-15">
      <div className="d-flex align-center">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Link href="/" className={styles.logo}>
          <a>
            <Image
              width={33}
              height={43}
              className="mr-20"
              src="/public/img/logo.svg"
              alt="Logo"
            />
          </a>
        </Link>
        <div className={styles.searchBlock}>
          <SearchIcon />
          <input placeholder="Поиск" />
        </div>

        <Button variant="contained" className={styles.penButton}>
          Новая запись
        </Button>
      </div>
      <div className="d-flex align-center">
        <IconButton>
          <MessagesIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <Avatar
          className={styles.avatar}
          alt="Remy Sharp"
          src="https://sun9-79.userapi.com/s/v1/if2/7viqShdtrkuz3b9KNLIqBq0U0ViEXka4iwHWU4sFycx4bkTXq3wQ9_EfXxggFYX7B2r8VlYf33WuxQr2AWNR6Lj9.jpg?size=810x1080&quality=95&type=album"
        />
				<ArrowBottom />
      </div>
    </Paper>
  );
};

export default Header;
