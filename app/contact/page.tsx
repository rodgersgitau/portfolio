import Availability from "@/components/availability";
import ContactForm from "@/components/forms/contact-form";
import ProductRequestForm from "@/components/forms/product-request-form";

import PageLayout from "@/components/layouts/page-layout";

import TestimonyList from "@/components/testimonial";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ContactPage() {
  return (
    <PageLayout
      aside={
        <TestimonyList
          orientation="vertical"
          className="flex flex-col w-full gap-8"
        />
      }
    >
      <div className="flex flex-col gap-8">
        <h1 className="text-xl font-black md:text-2xl">Enquiries</h1>
        <Separator />
        <Tabs defaultValue="product" className="flex-1 p-0 py-2 space-y-8">
          <TabsList className="flex justify-start w-full h-full gap-4 bg-transparent">
            <TabsTrigger value="product" asChild>
              <Button
                variant="outline"
                className="data-[state=active]:!bg-accent data-[state=active]:!text-accent-foreground data-[state=active]:!border-transparent"
              >
                Product or website
              </Button>
            </TabsTrigger>
            <TabsTrigger value="consult" asChild>
              <Button
                variant="outline"
                className="data-[state=active]:!bg-accent data-[state=active]:!text-accent-foreground data-[state=active]:!border-transparent"
              >
                Consultation
              </Button>
            </TabsTrigger>
            <TabsTrigger value="other" asChild>
              <Button
                variant="outline"
                className="data-[state=active]:!bg-accent data-[state=active]:!text-accent-foreground data-[state=active]:!border-transparent"
              >
                Other
              </Button>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="product">
            <ProductRequestForm />
          </TabsContent>
          <TabsContent value="consult">
            <Availability />
          </TabsContent>
          <TabsContent value="other">
            <ContactForm />
          </TabsContent>
        </Tabs>
      </div>
    </PageLayout>
  );
}
