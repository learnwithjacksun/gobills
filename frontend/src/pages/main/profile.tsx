import { MiniLayout } from "@/layouts";
import {
  AvatarUploader,
  ButtonWithLoader,
  InputWithoutIcon,
  SelectWithoutIcon,
} from "@/components/ui";
import { useState } from "react";

export default function Profile() {
  const [avatar, setAvatar] = useState<string | undefined>(
    "https://api.dicebear.com/9.x/adventurer/svg?seed=Felix"
  );

  return (
    <MiniLayout>
      <section className="bg-background dark:bg-secondary rounded-xl border border-line overflow-hidden">
        {/* Header band */}
        <div className="h-28 w-full bg-gradient-to-r from-primary/20 dark:from-primary/40 via-yellow-500/10 dark:via-yellow-200 to-primary/20 dark:to-primary/40" />

        {/* Avatar */}
        <div className="px-4 sm:px-6 -mt-14">
          <div className="w-fit mx-auto p-2 rounded-full bg-background dark:bg-foreground border border-line">
            <AvatarUploader value={avatar} onChange={setAvatar} size={112} />
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 grid grid-cols-1 gap-6">
          {/* Profile Information Form */}
          <form
            className="space-y-4 "
            onSubmit={(e) => {
              e.preventDefault();
              // TODO: submit profile info
              console.log("Profile info saved");
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputWithoutIcon
                type="text"
                label="First name"
                placeholder="Gift"
                className='bg-foreground'
              />
              <InputWithoutIcon
                type="text"
                label="Last name"
                placeholder="Jacksun"
                className='bg-foreground'
              />
              <InputWithoutIcon
                label="Email"
                type="email"
                placeholder="gift@example.com"
                className='bg-foreground'
              />
              <InputWithoutIcon
                label="Phone"
                type="tel"
                placeholder="0801 234 5678"
                className='bg-foreground'
              />
              <SelectWithoutIcon
                label="Country"
                options={[
                  { label: "Nigeria", value: "NG" },
                  { label: "Ghana", value: "GH" },
                  { label: "Kenya", value: "KE" },
                ]}
                className='bg-foreground'
              />
              <InputWithoutIcon type="text" label="City" placeholder="Lagos" className='bg-foreground' />
            </div>
            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                className="btn px-4 h-10 flex-1 text-sm font-semibold rounded-lg border border-line"
              >
                Cancel
              </button>
              <ButtonWithLoader
                className="btn btn-primary px-5 h-10 flex-1 text-sm rounded-lg"
                loading={false}
                initialText="Save changes"
                loadingText="Saving..."
              />
            </div>
          </form>
        </div>
      </section>
    </MiniLayout>
  );
}
