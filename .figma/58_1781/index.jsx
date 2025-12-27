import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.diagram}>
      <div className={styles.frame318}>
        <div className={styles.frame310}>
          <p className={styles.totalExpenses}>Total Expenses</p>
          <div className={styles.vector3}>
            <div className={styles.vector} />
            <div className={styles.vector2} />
            <div className={styles.vector2} />
          </div>
        </div>
        <div className={styles.frame311}>
          <img src="../image/mji8a6es-uajiw6n.png" className={styles.ellipse132} />
          <div className={styles.frame312}>
            <p className={styles.totals}>Totals</p>
            <p className={styles.a10500}>$10.500</p>
          </div>
        </div>
        <img src="../image/mji8a6es-2xqbu3v.png" className={styles.ellipse130} />
        <img src="../image/mji8a6es-gpn26mv.png" className={styles.ellipse133} />
        <img src="../image/mji8a6es-p7c1gdf.png" className={styles.ellipse131} />
      </div>
      <div className={styles.frame853}>
        <div className={styles.frame849}>
          <div className={styles.frame749}>
            <div className={styles.ellipse79} />
            <p className={styles.a50}>50%</p>
          </div>
          <p className={styles.food}>Food</p>
        </div>
        <div className={styles.frame851}>
          <div className={styles.frame7492}>
            <div className={styles.ellipse792} />
            <p className={styles.a50}>48%</p>
          </div>
          <p className={styles.education}>Education</p>
        </div>
        <div className={styles.frame852}>
          <div className={styles.frame7493}>
            <div className={styles.ellipse80} />
            <p className={styles.a50}>33%</p>
          </div>
          <p className={styles.other}>Other</p>
        </div>
      </div>
      <div className={styles.frame316}>
        <p className={styles.moreDetails}>More details</p>
      </div>
    </div>
  );
}

export default Component;
