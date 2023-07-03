'use client'

import AlertModal from "@/components/modals/alert-modal"
import ApiAlert from "@/components/ui/api-alert"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Heading } from "@/components/ui/heading"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/components/ui/use-toast"
import { useOrigin } from "@/hooks/use-origin"
import { zodResolver } from "@hookform/resolvers/zod"
import { Store } from "@prisma/client"
import axios from "axios"
import { Trash } from "lucide-react"
import { useParams , useRouter} from "next/navigation"

import { useState } from "react"
import { useForm } from "react-hook-form"
import * as z from "zod"


interface SettingsFormProps {
    initialData: Store
}

const formSchema = z.object({
    name: z.string().min(1)
})

type SettingsFormValue = z.infer<typeof formSchema>

interface SettingsFormProps {
    initialData: Store
}

const SettingsForm: React.FC<SettingsFormProps> = ({
    initialData
}) => {
    const [open , setOpen ] = useState(false)
    const [loading , setLoading] = useState(false)

    const { toast } = useToast()
    const params = useParams()
    const router = useRouter()
    const origin = useOrigin();


    const form = useForm<SettingsFormValue>({
        resolver: zodResolver(formSchema),
        defaultValues: initialData
    })

    const onSubmit = async (data: SettingsFormValue) => {
        try {
            setLoading(true)
            await axios.patch(`/api/stores/${params.storeId}` , data)
            router.refresh()
            toast({
                title: "Updated Successfully.",
                description: "Your store has been updated Successfully",
              })            

        } catch (error) {
            toast({
                variant:"destructive",
                title: "Uh oh! Something went wrong.",
                description: "There was a problem with your request. Please try again!",
              })
        } finally {
            setLoading(false)
        }
    }

    const onDelete = async () => {
        try {
            setLoading(true)
            await axios.delete(`/api/stores/${params.storeId}`)
            router.refresh()
            router.push('/')
            toast({
                title: "Deleted Successfully.",
                description: "Your store has been deleted Successfully",
              }) 
            
        } catch (error) {
            toast({
                variant:"destructive",
                title: "Uh oh! Something went wrong.",
                description: "Make sure you removed all products and categories first.",
              })
        } finally {
            setLoading(false);
            setOpen(false);
        }
    }


    return (
        <>
            <AlertModal 
                isOpen={open}
                onClose={() => setOpen(false)}
                onConfirm={onDelete}
                loading={loading}
            />
            <div className="flex items-center justify-between" >
                <Heading
                    title="Settings"
                    description="Manage store preferences"
                />
                <Button
                    disabled={loading}
                    variant="destructive"
                    size="icon"
                    onClick={() => setOpen(true)}
                >
                    <Trash className="h-4 w-4" />
                </Button>
            </div>
            <Separator />
            <Form {...form} >
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8 w-full"
                >
                    <div className="grid grid-cols-3 gap-8" >
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Name
                                    </FormLabel>
                                    <FormControl>
                                        <Input 
                                        disabled={loading}
                                        placeholder="Store Name" {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <Button
                        disabled={loading}
                        className="ml=auto"
                        type="submit"
                    >
                        Save Changes
                    </Button>
                </form>

            </Form>
            <Separator />
            <ApiAlert 
                title="NEXT_PUBLIC_API_URL" 
                description={`${origin}/api/${params.storeId}`} 
                variant="public" 
            />
        </>
    )
}

export default SettingsForm
