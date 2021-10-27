import classes from "./Middle.module.css";

export default function Middle() {
  return (
    <div>
      <div className={classes.travel}>
        <div className={classes.content1}>
          <h1>
            Travel and expense
            <br /> management, the easy way.
          </h1>
          <button type="button" className={classes.btnaccess}>
            {" "}
            Access Zoho Expense
          </button>
          &nbsp; &nbsp; &nbsp;
          <button type="button" className={classes.btndemo}>
            Request for demo
          </button>
        </div>
        <div className={classes.content2}>
          <h3>
            {" "}
            Expense reporting has been so easy after we <br />
            started using Zoho Expense. The efficiency of
            <br /> expense reporting and reimbursement has
            <br />
            improved multifold.
            <br />
            <br />
            Dhruvil Sanghvi,CEO, LogiNext Solutions
          </h3>
        </div>
      </div>

      <div className={classes.trail}>
        <div>
          <video
            className={classes.trailvideo}
            width="720"
            height="600"
            controls
          >
            <source
              src="https://www.zoho.com/expense/index/features/spend-control.webm?v=1"
              type="video/mp4"
            />
          </video>
        </div>
        <div className={classes.trailcontent}>
          <h2>Spend control </h2>
          <p>
            Never go overboard with your spending. Set up
            <br /> budgets, enforce policies, and configure purchase <br />
            approvals to ensure no money is wasted on
            <br /> unauthorized expenses or purchases. Not just that:
          </p>
          <div className={classes.checkmark}>
            <ul>
              <li> &nbsp;Create budgets and compare with actual spending</li>

              <li>
                {" "}
                &nbsp; Set up different rules to restrict overspending by
                employees
              </li>
              <li> &nbsp;Streamline spending with purchase requests</li>
            </ul>
          </div>
          &nbsp;
          <a className={classes.traillink}>
            <b>Learn more &rarr;</b>{" "}
          </a>
        </div>
      </div>

      <div className={classes.audit}>
        <div className={classes.trailcontent}>
          <h2>Audit & compliance </h2>
          <p>
            Zoho Expense's AI-driven fraud detection engine helps
            <br /> you audit your business expenses better and keeps you <br />
            ready for tax season. With dedicated country editions,
            <br /> you get local compliance and mileage rates by default
          </p>
          <div className={classes.checkmark}>
            <ul>
              <li>
                {" "}
                &nbsp;Audit expenses prudently and spot fraud with <br />
                &nbsp; &nbsp; AI-driven insights
              </li>

              <li> Choose from different existing tax-ready editions</li>
              <li> Keep track of all activity with a complete audit trail</li>
            </ul>
          </div>
          &nbsp;
          <a className={classes.traillink}>
            <b>Learn more &rarr;</b>{" "}
          </a>
        </div>
        <div>
          <video
            className={classes.trailvideo}
            width="720"
            height="600"
            controls
          >
            <source
              src="https://www.zoho.com/expense/index/audit-and-compliance.webm?v=1"
              type="video/mp4"
            />
          </video>
        </div>
      </div>

      <div className={classes.extend}>
        <div className={classes.extendhead}>
          <h1>Zoho Expense is extensible</h1>
        </div>
        <div className={classes.extendflex}>
          <div className={classes.extendflex1}>
            {" "}
            <h3> Automation</h3>
            <p>
              {" "}
              Set different expense reporting tasks to <br />
              autopilot with features like workflow
              <br /> rules, custom functions,
              <br /> and webhooks.
            </p>
            <img scr="https://www.zoho.com/expense/index/automation-1x.webp" />
          </div>
          <div className={classes.extendflex2}>
            <h3>Customization</h3>
            <p>
              Tailor your travel and expense <br />
              management to suit your business' <br /> needs. Create custom
              components like
              <br /> buttons, links, and modules.
            </p>
          </div>
          <div className={classes.extendflex3}>
            <h3>Collaboration</h3>
            <p>
              <div>
                Siloed departments are a thing of the
                <br /> past. Communicate with employees
                <br />
                contextually and in real-time via chat,
                <br /> comments, and notifications.
              </div>{" "}
            </p>
          </div>
        </div>

        <div className={classes.gallery}>
          <img
            src="https://www.zoho.com/expense/index/automation-1x.webp"
            alt="automation"
            width="75%"
          />
        </div>
      </div>

      <div className={classes.expand}>
        <h2>Enhance the employee experience </h2>
        <p>
          Thanks to integrations with leading travel, HRMS, accounting and ERP,
          and collaboration
          <br /> solutions, Zoho Expense simplifies countless business processes
        </p>
        <a className={classes.traillink}>
          <b>Explore more Intergartion &rarr; </b>
        </a>
      </div>

      <div className={classes.galleryexp}>
        <img
          src="https://www.zoho.com/expense/common/integrated-apps/integrations-1x.webp"
          alt="experience"
          width="60%"
        />
      </div>

      <div className={classes.improve}>
        <div className={classes.improvecontent}>
          {" "}
          <h1>
            Improving T&E <br />
            management globally
          </h1>
          <p>
            Zoho Expense solves T&E and spending problems <br />
            for thousands of organizations like yours. Read about their
            journeys.
          </p>
          <a>
            <b>Explore more case studies &rarr;</b>
          </a>
        </div>
        <div className={classes.improvecontent1}>
          <p>
            We started using Zoho Expense across our whole IFFCO <br />
            group for Travel and Expense Management as one of the key <br />
            aspects to keep control on spends. This made the whole
            <br /> process of expense and reimbursement fully automated.
          </p>
          <br />
          <p>
            <b>Jaroslaw Pietraszko</b> <br />
            Director ERP & Digital Transformation, IFFCO Group
          </p>
        </div>
      </div>

      <div className={classes.caretake}>
        <div className={classes.caretake1}>
          {" "}
          <img
            src="https://www.zoho.com/expense/index/support-illustration-1x.jpg"
            alt="experience"
            width="75%"
            height="40%"
          />
          <h2>
            We'll take care of your <br />
            travel and expenses
          </h2>
          <p>
            Our support team is available to help you get the
            <br /> most out of Zoho Expense and ease your travel
            <br /> and expense management problems.
          </p>
        </div>

        <div className={classes.caretake2}>
          <div className={classes.support}>
            {" "}
            &nbsp;
            <img
              className={classes.img1}
              src=" https://www.zoho.com/expense/index/24-hrs-support.svg"
            />
            <h3> &nbsp;24x5 Support</h3>
          </div>
          <div className={classes.support}>
            {" "}
            &nbsp;
            <img
              className={classes.img1}
              src=" https://www.zoho.com/expense/index/call-email-assitance.svg"
            />
            <h3> &nbsp;Call and email assistance</h3>
          </div>
          <div className={classes.support1}>
            {" "}
            &nbsp;
            <img
              className={classes.img1}
              src="https://www.zoho.com/expense/index/onboarding-assitance.svg?v=1"
            />
            <h3> &nbsp;Free 2-hour onboarding assistance</h3>
          </div>
        </div>
      </div>

      <div className={classes.expand}>
        <h1>
          Travel and expense management,
          <br />
          the easy way.
        </h1>
        <button type="button" className={classes.btnaccess}>
          {" "}
          Access Zoho Expense
        </button>
        &nbsp; &nbsp; &nbsp;
        <button type="button" className={classes.btndemo}>
          Request for demo
        </button>
      </div>
      <img
        className={classes.img2}
        src=" https://www.zoho.com/expense/index/footer-illustration.svg"
      />
    </div>
  );
}
