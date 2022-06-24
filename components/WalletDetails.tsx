import { FaBalanceScaleLeft, FaCog, FaUserPlus, FaUsers } from 'react-icons/fa'
import AddMemberModal from './AddMemberModal'
import MembersTable from "./MembersTable";
import styles from '../styles/MemembersList.module.css'

type WalletDetailsProps = {
  wallet: any
}

const WalletDetails = ({ wallet }: WalletDetailsProps) => {
  return (
    <div className="w-full flex flex-col gap-8">
      <div className="flex justify-between flex-wrap gap-5 md:gap-0 pb-8">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="w-full text-3xl md:text-4xl font-bold text-primary dark:text-white">
            #{wallet.name}
          </p>
          <span className="break-words">{wallet.pubKey}</span>
        </div>

        <div className=" w-full md:w-1/3 flex justify-center md:justify-end">
          <div className="tooltip tooltip-secondary" data-tip="Add members">
            <label
              htmlFor="add-member-modal"
              className="bg-secondary cursor-pointer h-12 w-12 flex hover:brightness-90 justify-center items-center rounded-lg"
            >
              <FaUserPlus className="text-white text-xl" />
            </label>
          </div>
        </div>
      </div>

      <div className="flex justify-between relative items-end w-full">
        <div className="group">
          <div className="absolute transition-opacity duration-300 opacity-0 group-hover:opacity-40 flex justify-center h-full items-center -left-6">
            <FaBalanceScaleLeft className="text-white" />
          </div>

          <p className="text-xl font-bold">Authority</p>
        </div>

        <p>{wallet.authority}</p>
      </div>

      <div>
        <div className="flex justify-between relative items-end w-full">
          <div className="group">
            <div className="absolute transition-opacity duration-300 opacity-0 group-hover:opacity-40 flex justify-center h-full items-center -left-6">
              <FaUsers className="text-white" />
            </div>

            <p className="text-xl font-bold">Members</p>
          </div>

          <p>Total shares: {wallet.shares}</p>
        </div>
        {/*add members table here */}
        <div className={`card-bordered shadow-xl w-full rounded h-80 overflow-y-scroll ${styles.membersTableBg}`}>
          {wallet.members.length > 0 ? (<MembersTable members={wallet?.members} />): (<p className="text-center text-xl font-bold">No members please add new members</p>)}
          {/* <MembersTable member={wallet.members} /> */}
          
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <div className="group relative">
          <div className="absolute transition-opacity duration-300 opacity-0 group-hover:opacity-40 flex justify-center h-full items-center -left-6">
            <FaCog className="text-white" />
          </div>

          <h6 className="text-xl font-bold">Settings</h6>
        </div>

        <div className="flex justify-between">
          <p>Membership model: </p>
          <p>{wallet.model}</p>
        </div>

        <div className="flex w-full justify-between flex-wrap gap-y-5">
          <div className="flex justify-between w-full md:w-1/3">
            <p>Accept SPL token: </p>
            <p className="text-primary">
              {wallet.acceptSPL ? <span>Accept</span> : <span>No</span>}
            </p>
          </div>

          {wallet.acceptSPL ? (
            <div className="flex flex-col lg:flex-row justify-between w-full md:w-1/2">
              <p className="mr-3">SPL public key: </p>
              <p className="text-primary break-words"> {wallet.pubKeySPL}</p>
            </div>
          ) : null}
        </div>
      </div>

      <AddMemberModal />
    </div>
  )
}

export default WalletDetails
