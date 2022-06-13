import { Button } from "@material-ui/core";
import React from "react";
import styles from "./LeftMenu.module.scss";
import {
  WhatshotOutlined as FireIcon,
  SmsOutlined as MessagesIcon,
  TrendingUpOutlined as TrendingIcon,
  FormatListBulletedOutlined as ListIcon,
} from "@material-ui/icons";

const LeftMenu: React.FC = () => {
  return (
    <div className={styles.menu}>
      <ul>
        <li>
          <Button>
            <FireIcon />
            Лента
          </Button>
        </li>
        <li>
          <Button>
            <MessagesIcon />
            Сообщения
          </Button>
        </li>
        <li>
          <Button>
            <TrendingIcon />
            Рейтинг TJ
          </Button>
        </li>
        <li>
          <Button>
            <ListIcon />
            Подписки
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default LeftMenu;
