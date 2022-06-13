import { Paper, Typography } from "@material-ui/core";
import Image from "next/image";
import React from "react";
import styles from "./Post.module.scss";

const Post: React.FC = () => {
  return (
    <Paper elevation={0} className="p-20" classes={{root: styles.paper}}>
      <Typography variant="h5" className={styles.title}>
        Никакого больше «Па-ра-па-па-пам»: TJ посетил фастфуд, который открылся
        вместо ушедшего
      </Typography>
      <Typography className="mt-15 mb-15">Делимся впечатлениями. </Typography>
      <Image
        width={900}
        height={600}
        alt="Вкусно и точка"
        src="https://s0.rbk.ru/v6_top_pics/media/img/7/24/756550269002247.jpg"
      />
    </Paper>
  );
};

export default Post;
