import styles from "./Header.module.css";
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import head from "next/head";
import Link from "next/link"

export default function Header(){
    return(
        <>
            <head>
                <title>Online Travel and Expense</title>
            </head>
            <div className={`${styles["header"]} `}>
                <img className={styles.zoho_logo}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiyXcAL_X3BDt0wqHNQFAjeO815LtxqtpsXOdQa_VczdylbS2beWmdABfONqPA-1YgjbA&usqp=CAU"
                    alt="zoho_logo"
                />
                <ul>
                    <li><a href="#">CRM</a></li>
                    <li><a href="#">Books</a></li>
                    <li><a href="#">Invoice</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">People</a></li>
                    <li><a href="#">Analytics</a></li>
                </ul>
                <div className={styles.icon_div}>
                    <SearchIcon />
                    <Link href="/signin"><button className={styles.signin_btn}>SIGN IN</button></Link>
                    <Link href="/register"><button className={styles.signup_btn}>SIGN UP NOW</button></Link>
                </div>
            </div>
            <div className={styles.top}>
                <div className={styles.top_nav}>
                    <img className={styles.expense_logo} 
                    src="https://www.zoho.com/expense/index/expense-logo-white.png" alt="expense_logo"
                    />
                    <a className={styles.expense_title}>Expense</a>
                    <div className={styles.expense_title_list}>
                        <ul>
                            <li className={styles.header_dropdown_list}>
                                <a className={styles.tollfreeno}>Toll Free - 18001237711</a>
                            </li>
                            <li className={styles.header_dropdown_list}>
                                <a>Features</a>
                                <ArrowDropDownIcon className={styles.arrow} />
                                <div className={styles.dropdown_list}>
                                <a href="#">Expenses</a>
                                <a href="#">Cards</a>
                                <a href="#">Expense Reports</a>
                                <a href="#">Travel</a>
                                <a href="#">Purchase requests</a>
                                <a href="#">Approvals</a>
                                <a href="#">Audit and compliance</a>
                                <a href="#">Reimbursement</a>
                                <a href="#">Expense Control</a>
                                <a href="#">For Enterprises</a>
                                </div>
                            </li>
                            <li className={styles.header_dropdown_list}>
                                <a>Pricing</a>
                            </li>
                            <li className={styles.header_dropdown_list}>
                                <a>Solutions</a>
                                <ArrowDropDownIcon className={styles.arrow} />
                                <div className={styles.dropdown_list}>
                                <p>By Industry</p>
                                <a href="#">Consultans</a>
                                <a href="#">Education</a>
                                <a href="#">Healthcare</a>
                                <a href="#">Manufacturing</a>
                                <a href="#">Non-profils</a>
                                <a href="#">Marketing</a>
                                <p>By Size</p>
                                <a href="#">Self-employed</a>
                                <a href="#">Small Business</a>
                                <a href="#">Enterprise</a>
                                </div>
                            </li>
                            <li className={styles.header_dropdown_list}>
                                <a>Customers</a>
                            </li>
                            <li className={styles.header_dropdown_list}>
                                <a>Accountants</a>
                            </li>
                            <li className={styles.header_dropdown_list}>
                                <a>Resources</a>
                                <ArrowDropDownIcon className={styles.arrow} />
                                <div className={styles.dropdown_list}>
                                <a href="#">Mobile Apps</a>
                                <a href="#">Integrations</a>
                                <a href="#">Webinars</a>
                                <a href="#">Forums</a>
                                <a href="#">FAQ</a>
                                <a href="#">Help Docs</a>
                                <a href="#">GST Guides</a>
                                <a href="#">Business Guides</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.header1}>
                    <div className={styles.header1_left}>
                        <img className={styles.expense_img} 
                        src="https://www.zoho.com/expense/index/header-1x.webp?v=1" alt=""
                        />
                    </div>
                    <div className={styles.header1_right}>
                        <h1>Travel and expense management for growing businesses</h1>
                        <p>Across 5+ years, Zoho Expense has helped tens of thousands of businesses streamline corporate travel, automate expense reporting, gain complete control over spending, and get crucial financial insights to stay two steps ahead.</p>
                        <button className={styles.access_expense}>
                            <Link href="/signin">
                            <a>Access Zoho Expense</a>
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
            <div className={styles.details}>
                <div className={styles.details_border}>
                    <div>
                        <img className={styles.research_logo} 
                        src="https://www.zoho.com/expense/index/vedanta-research.png" alt=""
                        />
                    </div>
                    <div className={styles.details_desc}>
                        <h1>"Provides both real-time spend visibility and strong controls"</h1>
                        <p><b>Analyst Robert Kugel</b> from <b>Ventana Research</b> reckons that by simplifying employee compliance with spend guidelines and streamlining expense reporting, Zoho Expense meets the needs of managers and road warriors.</p>
                    </div>
                </div>
            </div>
            <div className={styles.heading2}>
                <h1>What Zoho Expense brings to the table</h1>
            </div>
            <div>
                <section className={styles.flip}>
                    <div className={styles.flip_container}>
                        <div className={styles.flip_card_container}>
                            <div className={styles.flip_card_front}>
                                <div>
                                    <img className={styles.flip_img} 
                                    src="https://www.zoho.com/expense/index/travel.svg" alt="" />
                                    <h1>Travel</h1>
                                    <p>One-stop solution to manage online and offline travel.</p>
                                </div>
                            </div>
                            <div className={styles.flip_card_back}>
                                <div>
                                    <h1>Travel</h1>
                                    <p>Manage all the stages of your employees' business trips—before, during, and after. Make travel and hotel bookings, set up pre-travel approvals, and do much more.</p>
                                </div>
                            </div>
                        </div>
                    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div className={styles.flip_container}>
                        <div className={styles.flip_card_container}>
                            <div className={styles.flip_card_front}>
                                <div>
                                    <img className={styles.flip_img} 
                                    src="https://www.zoho.com/expense/index/expense.svg" alt="" />
                                    <h1>Expense</h1>
                                    <p>End-to-end expense reporting automation.</p>
                                </div>
                            </div>
                            <div className={styles.flip_card_back}>
                                <div>
                                    <h1>Expense</h1>
                                    <p>Automate expense reporting from start to finish. Enable employees to report expenses on the go, simplify approvals, and reimburse on time.</p>
                                </div>
                            </div>
                        </div>
                    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div className={styles.flip_container}>
                        <div className={styles.flip_card_container}>
                            <div className={styles.flip_card_front}>
                                <div>
                                    <img className={styles.flip_img} 
                                    src="https://www.zoho.com/expense/index/cards.svg" alt="" />
                                    <h1>Cards</h1>
                                    <p>One-stop solution to manage online and offline travel.</p>
                                </div>
                            </div>
                            <div className={styles.flip_card_back}>
                                <div>
                                    <h1>Cards</h1>
                                    <p>Add your company cards, fetch card feeds directly from card providers, and automate reconciliation.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <br/>
                <section className={styles.flip}>
                    <div className={styles.flip_container}>
                        <div className={styles.flip_card_container}>
                            <div className={styles.flip_card_front}>
                                <div>
                                    <img className={styles.flip_img} 
                                    src="https://www.zoho.com/expense/index/purchase-request.svg" alt="" />
                                    <h1>Purchase Request</h1>
                                    <p>Streamlined purchasing, guaranteed.</p>
                                </div>
                            </div>
                            <div className={styles.flip_card_back}>
                                <div>
                                    <h1>Purchase Request</h1>
                                    <p>Procurement teams can ensure budgetary compliance and better control over purchases with comprehensive requests and approvals, thus maximizing pre-approved spending.</p>
                                </div>
                            </div>
                        </div>
                    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div className={styles.flip_container}>
                        <div className={styles.flip_card_container}>
                            <div className={styles.flip_card_front}>
                                <div>
                                    <img className={styles.flip_img} 
                                    src="https://www.zoho.com/expense/index/payments.svg" alt="" />
                                    <h1>Payments</h1>
                                    <p>Reimbursements and payments done right.</p>
                                </div>
                            </div>
                            <div className={styles.flip_card_back}>
                                <div>
                                    <h1>Payments</h1>
                                    <p>Cut down on turnaround time by reimbursing employees on time with direct deposit.</p>
                                </div>
                            </div>
                        </div>
                    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div className={styles.flip_container}>
                        <div className={styles.flip_card_container}>
                            <div className={styles.flip_card_front}>
                                <div>
                                    <img className={styles.flip_img} 
                                    src="https://www.zoho.com/expense/index/analytics.svg" alt="" />
                                    <h1>Analytics</h1>
                                    <p>Comprehensive travel and expense management analytics.</p>
                                </div>
                            </div>
                            <div className={styles.flip_card_back}>
                                <div>
                                    <h1>Analytics</h1>
                                    <p>25+ analytic reports on expense reports, cards, travel, spending, and reimbursement to keep you up to speed at all times.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className={styles.access_expense_prod_btn}>
                        <button className={styles.access_expense_prod}>
                            <Link href="#">
                            <a>VIEW PRODUCT FEATURES</a>
                            </Link>
                        </button>
                </div>
            </div>
        </>
    )
}
